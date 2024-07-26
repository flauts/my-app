import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import MyButton from "../../components/MyButton";
const SettingsPage = () => {
  return (
    <View className="flex-column gap-4">
      <Text>Settings</Text>
      <Link asChild href="/">
        <Text>Home</Text>
      </Link>
    </View>
  );
};

export default SettingsPage;
