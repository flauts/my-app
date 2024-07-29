import { Link } from "expo-router";
import React from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { UserIcon, SettingsIcon, NotificationIcon, SearchIcon } from "./Icons";
import { styled } from "nativewind";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const StyledPressable = styled(Pressable);

const Header = () => {
  const insets = useSafeAreaInsets();
  return (
    <>
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
      <View className="flex-row bg-gray-200 gap-x-4 items-center rounded-xl mx-5 py-4">
        <View>
          <SearchIcon />
        </View>
        <TextInput className="grow" placeholder="Search for something...." />
      </View>
    </>
  );
};

export default Header;
