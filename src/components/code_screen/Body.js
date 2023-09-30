import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Body = () => {
  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.bodySubText}>Enter one-time password sent on</Text>
      <Text style={styles.bodySubText}>++849092605798</Text>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="code-address"
          style={styles.input}
          maxLength={1}
        />
        <TextInput
          keyboardType="code-address"
          style={styles.input}
          maxLength={1}
        />
        <TextInput
          keyboardType="code-address"
          style={styles.input}
          maxLength={1}
        />
        <TextInput
          keyboardType="code-address"
          style={styles.input}
          maxLength={1}
        />
        <TextInput
          keyboardType="code-address"
          style={styles.input}
          maxLength={1}
        />
        <TextInput
          keyboardType="code-address"
          style={styles.input}
          maxLength={1}
        />
      </View>
    </View>
  );
};

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
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  input: {
    width: 40, // Điều chỉnh chiều rộng TextInput vuông theo ý muốn
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    textAlign: "center",
  },
});

export default Body;
