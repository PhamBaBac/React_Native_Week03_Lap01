// Import React and React Native components
import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

// Define a custom component for the app logo
const Header = () => {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logo}>CODE</Text>
      <Text style={styles.logoText}>VERIFICATION</Text>
    </View>
  );
};

// Define the styles for the component
const styles = StyleSheet.create({
  logoContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontSize: 60,
    fontWeight: "bold",
    marginBottom: 60,
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
