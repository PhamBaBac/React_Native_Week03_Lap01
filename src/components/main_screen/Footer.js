import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  const handleLoginPress = () => {
    navigation.navigate("LoginScreen");
  };

  const handleSignupPress = () => {
    navigation.navigate("SignupScreen");
  };

  return (
    <View style={styles.buttonContainer}>
      <View style={styles.buttonWrapper}>
        <Pressable onPress={handleLoginPress} style={styles.buttonLeft}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
        <Pressable onPress={handleSignupPress} style={styles.buttonRight}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </Pressable>
      </View>
      <View style={styles.howWeWorkContainer}>
        <Text style={styles.howWeWork}>HOW WE WORK?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
  },
  buttonWrapper: {
    flexDirection: "row",
    marginBottom: 20,
  },
  buttonLeft: {
    flex: 1,
    height: 40,
    width: 120,
    backgroundColor: "#FFFF00",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  buttonRight: {
    flex: 1,
    height: 40,
    width: 150,
    backgroundColor: "#FFFF00",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  howWeWorkContainer: {
    alignItems: "center",
  },
  howWeWork: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
});

export default Footer;
