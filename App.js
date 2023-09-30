import React from "react";
import { View, StyleSheet } from "react-native";
import AppNavigator from "./src/navigator/AppNavigator";

const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "auto",
  },
});

export default App;
