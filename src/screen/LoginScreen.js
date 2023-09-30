import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/login_screen/Header";
import Body from "../components/login_screen/Body";
import Footer from "../components/login_screen/Footer";

const LoginScreen = () => {
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

export default LoginScreen;
