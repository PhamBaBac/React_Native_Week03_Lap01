// Import React and React Native components
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>LOGIN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 60,
  },
  logoText: {
    fontSize: 30,
    fontWeight: "bold",
    borderColor: "#55DAF7",
  },
});

export default Header;
