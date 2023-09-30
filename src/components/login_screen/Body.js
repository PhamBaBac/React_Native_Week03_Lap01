import React from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
const Body = () => {
  const navigation = useNavigation();
  const handleLoginPress = () => {
    navigation.navigate("ForgetScreen");
  };
  const [hidePassword, setHidePassword] = React.useState(true);
  return (
    <View style={styles.bodyContainer}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.password}
          secureTextEntry={hidePassword}
          placeholder="   Password"
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
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </Pressable>
      <Text style={styles.bodySubText}>
        When you agree to terms and conditions
      </Text>
      <Text style={styles.bodySubText} onPress={handleLoginPress}>
        For got your password?
      </Text>
      <Text style={styles.bodySubText}>Or login with</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
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
});

export default Body;
