import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/signup_screen/Header";
import Body from "../components/signup_screen/Body";
import Footer from "../components/signup_screen/Footer";

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8EFDE",
  },
});

export default SignupScreen;
