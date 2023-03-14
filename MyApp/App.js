import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <View style={styles.day}>
        <Text style={styles.temp}>27</Text>
        <Text style={styles.weather}>sunny</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  city: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "tomato",
  },
  cityName: {
    fontSize: 50,
  },
  day: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "tomato",
  },
  temp: {
    fontSize: 160,
    marginTop: 70,
  },
  weather: {
    fontSize: 50,
  },
});
