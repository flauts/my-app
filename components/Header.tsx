import { Link } from "expo-router";
import React from "react";
import { View, Text, Pressable } from "react-native";
import { UserIcon, SettingsIcon, NotificationIcon } from "./Icons";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

const Header = () => {
  return (
    <View className="flex-row mx-3 my-4 justify-between">
      <StyledPressable className={`active:opacity-20`}>
        <UserIcon />
      </StyledPressable>
      <View className="flex-row gap-x-8">
        <StyledPressable className={`active:opacity-20`}>
          <NotificationIcon />
        </StyledPressable>
        <Link asChild href="/settings">
          <StyledPressable className={`active:opacity-20`}>
            <SettingsIcon />
          </StyledPressable>
        </Link>
      </View>
    </View>
  );
};

export default Header;
