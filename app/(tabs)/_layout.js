import { Tabs } from "expo-router";
import { View } from "react-native";

import { HomeIcon, MapIcon } from "../../components/Icons";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: HomeIcon,
          tabBarActiveTintColor: "black",
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          headerShown: true,
          title: "Map",
          tabBarIcon: MapIcon,
          tabBarActiveTintColor: "black",
        }}
      />
    </Tabs>
  );
}
