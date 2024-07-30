import { Tabs } from "expo-router";
import { View } from "react-native";

import { HomeIcon, MapIcon, ChatIcon } from "../../components/Icons";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function TabsLayout() {
  return (
    <BottomSheetModalProvider>
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
        <Tabs.Screen name="sheet" />
      </Tabs>
    </BottomSheetModalProvider>
  );
}
