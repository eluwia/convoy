import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import { useEffect, useState } from "react";
import * as React from 'react';


const tokenCache = {
  getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    }
    catch (err) {
      return null;
    }
  },
  saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    }
    catch (err) {
      return null;
    }
  },
};

export default function App() {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShowSplashScreen(false);
    }, 3000);
  });
  return (
      <View style={styles.container}>
        {isShowSplashScreen ? <SplashScreen /> : <HomeScreen />}
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});