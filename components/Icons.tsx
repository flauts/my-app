import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import { View, Text } from "react-native";

export const HomeIcon = (props: any) => (
  <Feather name="home" size={24} color="black" {...props} />
);

export const SearchIcon = (props: any) => (
  <Feather name="search" size={24} color="black" {...props} />
);

export const UserIcon = (props: any) => (
  <Feather name="user" size={24} color="black" {...props} />
);

export const SettingsIcon = (props: any) => (
  <Feather name="settings" size={24} color="black" {...props} />
);

export const NotificationIcon = (props: any) => (
  <Feather name="bell" size={24} color="black" {...props} />
);

export const BookmarkIcon = (props: any) => (
  <Feather name="bookmark" size={24} color="black" {...props} />
);

export const ShareIcon = (props: any) => (
  <Feather name="share-2" size={24} color="black" {...props} />
);

export const LikeIcon = (props: any) => (
  <Feather name="user-check" size={24} color="black" {...props} />
);

export const MapIcon = (props: any) => (
  <Feather name="map" size={24} color="black" {...props} />
);

export const SalonIcon = ({ num }: { num: string }) => (
  <View
    style={{ width: 100, marginBottom: 15 }}
    className="border-[2px] rounded-[10px] justify-center items-center bg-white shadow p-1"
  >
    <Text style={{ fontSize: 20 }}>{num}</Text>
  </View>
);
