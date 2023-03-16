import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";
import AudioPlayer from "./src/AudioPlayer";
import AudioRecorder from "./src/AudioRecorder";
export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <AudioRecorder />
      </View>
      <View>
        <AudioPlayer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
