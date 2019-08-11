
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import {HomeScreen} from './screens/HomeScreen';

export {
  HomeScreen
};

export const Counter: React.SFC = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <Text style={styles.instructions}>{count}</Text>
            <Button title="increment" onPress={() => setCount(count + 1)} />
        </>
    )
}

export const Count = () => {
  return (
    <View style={styles.container}><Counter /></View>
  );
}

export const App = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Natives!</Text>
      <Text style={styles.instructions}>To get started, edit App.tsx</Text>
      <Counter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    marginTop: 3
  }
});