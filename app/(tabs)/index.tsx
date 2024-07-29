import HomeScreen from "../../screens/HomeScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { Animated } from "react-native-maps";
import AnimatedGradient from "../../components/AnimatedGradient";
import { Stack } from "expo-router";
import Header from "../../components/Header";

export default function Index() {
  const insets = useSafeAreaInsets();
  return (
    <>
      <Stack.Screen
        options={{
          header: Header,
          headerShown: true,
        }}
      />
      <HomeScreen />
    </>
  );
}
