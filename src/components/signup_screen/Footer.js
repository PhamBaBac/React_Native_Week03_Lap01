import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

const Body = () => {
  return (
    <View style={styles.bodyContainer}>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>REGISTER</Text>
      </Pressable>
      <Text style={styles.bodySubText}>
        When you agree to terms and conditions
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button: {
    height: 40,
    backgroundColor: "#C34E3B",
    alignItems: "center",
    justifyContent: "center",
    width: "94%",
    marginTop: 60,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  bodySubText: {
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
    marginTop: 10,
  },
});

export default Body;
