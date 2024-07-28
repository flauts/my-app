import { View } from "react-native";
import { Stack } from "expo-router";
import AnimatedGradient from "../components/AnimatedGradient";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    ></Stack>
  );
}
