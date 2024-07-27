import { View, Text } from "react-native";
import { Slot, Stack } from "expo-router";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Layout() {
  const insets = useSafeAreaInsets();

  const header = () => {
    return (
      <View className="pb-4 bg-white">
        <Header />
        <SearchBar />
      </View>
    );
  };
  return (
    <View style={{ paddingTop: insets.top, flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </View>
  );
}
