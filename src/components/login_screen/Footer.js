import React from "react";
import { View, Text, StyleSheet, Pressable, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Footer = () => {
  const openFacebookLink = () => {
    Linking.openURL("https://www.facebook.com/");
  };

  const openGoogleLink = () => {
    Linking.openURL("#");
  };

  const openEmailLink = () => {
    Linking.openURL("#");
  };

  return (
    <View style={styles.linkWrapper}>
      <Pressable onPress={openFacebookLink}>
        <View style={styles.link}>
          <Icon name="facebook" size={30} color="#3b5998" />
        </View>
      </Pressable>
      <Pressable onPress={openGoogleLink}>
        <View style={styles.link}>
          <Icon name="google" size={30} color="#DB4437" />
        </View>
      </Pressable>
      <Pressable onPress={openEmailLink}>
        <View style={styles.link}>
          <Icon name="envelope" size={30} color="#000000" />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  linkWrapper: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 140,
  },
  link: {
    height: 40,
    width: 110,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#D8EFDE",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Footer;
