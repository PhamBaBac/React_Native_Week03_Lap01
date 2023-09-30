import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/forgetPass_screen/Header";
import Body from "../components/forgetPass_screen/Body";
import Footer from "../components/forgetPass_screen/Footer";

const ForgetPass = () => {
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

export default ForgetPass;
