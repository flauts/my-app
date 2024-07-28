import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const chat = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>aaa?</Text>
    </View>
  );
};

export default chat;
