import { View } from "react-native";
import { Stack } from "expo-router";
import AnimatedGradient from "../components/AnimatedGradient";
import { PostContext, PostContextProvider } from "../context/PostContext";

export default function Layout() {
  return (
    <PostContextProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      ></Stack>
    </PostContextProvider>
  );
}
