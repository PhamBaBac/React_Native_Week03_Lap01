import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/code_screen/Header";
import Body from "../components/code_screen/Body";
import Footer from "../components/code_screen/Footer";

const CodeScreen = () => {
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
    backgroundColor: "#CBF4F6",
  },
});

export default CodeScreen;
