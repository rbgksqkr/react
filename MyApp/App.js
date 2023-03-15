import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import * as Location from "expo-location";
import { useEffect } from "react";
import { useState } from "react";
import { config } from "./config";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const API_KEY = config.API_KEY;

export default function App() {
  const [ok, setOk] = useState(true);
  const [city, setCity] = useState("...loading");
  const [days, setDays] = useState([]);
  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    const list = json["list"].slice(0, 5);
    setDays(list);

    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
  };
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        contentContainerStyle={styles.weather}
        indicatorStyle="white"
      >
        {days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator
              color="white"
              style={{ marginTop: 60 }}
              size="large"
            />
          </View>
        ) : (
          days.map((day, index) => (
            <View style={styles.day} key={index}>
              <Text style={styles.temp}>{day.main.temp}</Text>
              <Text style={styles.description}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cityName: {
    fontSize: 50,
  },
  weather: {
    backgroundColor: "tomato",
  },
  day: {
    alignItems: "center",
    width: SCREEN_WIDTH,
  },
  temp: {
    fontSize: 160,
    marginTop: 70,
  },
  description: {
    fontSize: 50,
  },
  tinyText: {
    fontSize: 20,
  },
});
