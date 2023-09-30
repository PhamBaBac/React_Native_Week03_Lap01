// Import React and React Native components
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Define a custom component for the app logo
const Body = () => {
  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.bodySubText}>
        We will help you to grow your business using online server
      </Text>
    </View>
  );
};

// Define the styles for the component
const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bodySubText: {
    fontSize: 16,
    color: "#000000",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});

export default Body;
