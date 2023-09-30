import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/main_screen/Header";
import Body from "../components/main_screen/Body";
import Footer from "../components/main_screen/Footer";

const MainScreen = () => {
  return (
    <LinearGradient colors={["#CBF4F6", "#00CCF9"]} style={styles.container}>
      <Header />
      <Body />
      <Footer />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;
