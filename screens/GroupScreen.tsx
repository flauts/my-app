import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import ChatScreen from "./ChatScreen";

const App = () => {
  const [name, setName] = useState("");
  const [isEnter, setIsEnter] = useState(false);

  if (!isEnter)
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          textAlign="center"
          value={name}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
        />
        <Button title="Enter" onPress={() => setIsEnter(true)} />
      </View>
    );
  else return <ChatScreen name={name} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "50%",
  },
});

export default App;
