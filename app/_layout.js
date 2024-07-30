import { View } from "react-native";
import { Stack } from "expo-router";
import AnimatedGradient from "../components/AnimatedGradient";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      ></Stack>
    </GestureHandlerRootView>
  );
}
