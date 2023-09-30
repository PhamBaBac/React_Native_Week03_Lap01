import React from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { RadioButton } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

const Body = () => {
  const [selectedGender, setSelectedGender] = React.useState("male");
  const [hidePassword, setHidePassword] = React.useState(true);

  return (
    <View style={styles.bodyContainer}>
      <TextInput style={styles.input} placeholder="Name" keyboardType="name" />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        keyboardType="phone"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.password}
          placeholder="   Password"
          secureTextEntry={hidePassword}
        />
        <Pressable
          style={styles.eyeIcon}
          onPress={() => setHidePassword(!hidePassword)}
        >
          <Icon
            name={hidePassword ? "eye-slash" : "eye"}
            size={20}
            color="#000"
          />
        </Pressable>
      </View>
      <View style={styles.radioContainer}>
        <View style={styles.radioButton}>
          <RadioButton
            value="male"
            status={selectedGender === "male" ? "checked" : "unchecked"}
            onPress={() => setSelectedGender("male")}
          />
          <Text>Nam</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton
            value="female"
            status={selectedGender === "female" ? "checked" : "unchecked"}
            onPress={() => setSelectedGender("female")}
          />
          <Text>Nữ</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    width: "94%",
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
  },
  passwordContainer: {
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
  password: {
    flex: 1,
    height: 40,
  },
  eyeIcon: {
    position: "absolute",
    right: 0,
    marginRight: 10,
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
  radioContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "94%",
  },
  radioButton: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
});

export default Body;
