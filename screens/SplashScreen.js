import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Image, Animated,SafeAreaView } from "react-native";
import icon from '../assets/convoy-icon-2.png';

export default function SplashScreen() {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimation]);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.imageContainer, { opacity: fadeAnimation }]}
      >
        <Image style={styles.image} source={icon} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1F2937",
  },
  imageContainer: {
    overflow: "hidden",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
});
