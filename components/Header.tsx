import { Link } from "expo-router";
import React from "react";
import { View, Text, Pressable } from "react-native";
import { UserIcon, SettingsIcon, NotificationIcon } from "./Icons";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

const Header = () => {
  return (
    <View className="flex-row mx-3 my-4 justify-between">
      <UserIcon />
      <View className="flex-row gap-x-4">
        <View>
          <NotificationIcon />
        </View>
        <View>
          <SettingsIcon />
        </View>
      </View>
    </View>
  );
};

export default Header;
