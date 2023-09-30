import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  return (
    <View style={styles.buttonWrapper}>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>NEXT</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    height: 40,
    marginTop: 20,
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: "#FFFF00",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
});

export default Footer;
