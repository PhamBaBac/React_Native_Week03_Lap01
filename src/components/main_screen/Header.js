// Import React and React Native components
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// Define a custom component for the app logo
const Header = () => {
  return (
    <View style={styles.logoContainer}>
      <Image style={styles.logo} />
      <Text style={styles.logoText}>GROW</Text>
      <Text style={styles.logoText}>YOUR BUSINESS</Text>
    </View>
  );
};

// Define the styles for the component
const styles = StyleSheet.create({
  logoContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 60,
    borderRadius: 60,
    borderWidth: 15,
    borderColor: "#000000",
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
  },
});

export default Header;
