import { Tabs } from "expo-router";
import { View } from "react-native";

import { HomeIcon, MapIcon, ChatIcon } from "../../components/Icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "black" }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: HomeIcon,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          headerShown: true,
          title: "Map",
          tabBarIcon: MapIcon,
        }}
      />
      <Tabs.Screen
        name="groups"
        options={{
          title: "Groups",
          headerShown: true,
          tabBarIcon: ChatIcon,
        }}
      />
    </Tabs>
  );
}
