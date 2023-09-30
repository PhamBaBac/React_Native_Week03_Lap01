// Import React and React Native components
import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Body = () => {
  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.bodySubText}>
        Provide your email for which you want to reset your password
      </Text>
      <View style={styles.inputContainer}>
        <Icon style={styles.emailIcon} name="envelope" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="         Emai"
          keyboardType="email"
        />
      </View>
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
    textAlign: "center",
  },
  input: {
    flex: 1,
    height: 40,
  },
  inputContainer: {
    width: "94%",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    marginTop: 20,
    marginBottom: 10,
  },
  emailIcon: {
    marginLeft: 10,
    position: "absolute",
    left: 0,
  },
});

export default Body;
