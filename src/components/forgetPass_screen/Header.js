// Import React and React Native components
import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

// Define a custom component for the app logo
const Header = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/lock.png")}
      />
      <Text style={styles.logoText}>GROW</Text>
      <Text style={styles.logoText}>YOUR BUSINESS</Text>
    </View>
  );
};

// Define the styles for the component
const styles = StyleSheet.create({
  logoContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 40,
    borderColor: "#55DAF7",
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
  },
});

export default Header;
