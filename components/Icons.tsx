import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

export const NotificationIcon = (props: any) => {
  const [pressed, setPressed] = useState(false);
  return (
    <TouchableOpacity onPress={() => setPressed(!pressed)}>
      <FontAwesome
        name={pressed ? "bell" : "bell-o"}
        size={24}
        color="black"
        {...props}
      />
    </TouchableOpacity>
  );
};

export const BookmarkIcon = () => {
  const [pressed, setPressed] = useState(false);
  return (
    <TouchableOpacity onPress={() => setPressed(!pressed)}>
      <FontAwesome
        name={pressed ? "bookmark" : "bookmark-o"}
        size={24}
        color="black"
      />
    </TouchableOpacity>
  );
};

export const ShareIcon = () => {
  return (
    <TouchableOpacity>
      <FontAwesome name={"share-square-o"} size={24} color="black" />
    </TouchableOpacity>
  );
};
export const UserIcon = () => {
  return (
    <View>
      <TouchableOpacity>
        <FontAwesome name={"user"} size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export const SettingsIcon = () => {
  return (
    <Link asChild href="/settings">
      <TouchableOpacity>
        <FontAwesome name="cog" size={24} color="black" />
      </TouchableOpacity>
    </Link>
  );
};
export const LikeIcon = () => {
  const [pressed, setPressed] = useState(false);
  return (
    <TouchableOpacity onPress={() => setPressed(!pressed)}>
      <FontAwesome
        name={pressed ? "arrow-circle-up" : "arrow-circle-o-up"}
        size={24}
        color="black"
      />
    </TouchableOpacity>
  );
};

export const SearchIcon = () => {
  return <FontAwesome name="search" size={24} color="black" />;
};

export const MapIcon = () => {
  return <FontAwesome name={"map-o"} size={24} color="black" />;
};

export const SalonIcon = ({ num }: { num: string }) => {
  const [pressed, setPressed] = useState(false);
  return (
    <TouchableOpacity onPress={() => setPressed(!pressed)}>
      <View
        style={{ width: 100, height: 50, marginBottom: 15 }}
        className="border-[2px] rounded-[10px] justify-center items-center bg-white shadow p-1"
      >
        <FontAwesome
          name="qrcode"
          size={24}
          color={pressed ? "blue" : "black"}
        />
        <Text>{num}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const ChatIcon = () => {
  return <FontAwesome name="envelope-o" size={24} color="black" />;
};

export const HomeIcon = () => {
  return <FontAwesome name="lemon-o" size={24} color="black" />;
};
