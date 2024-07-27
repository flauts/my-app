import HomeScreen from "../../screens/HomeScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";

export default function Index() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top, backgroundColor: "white" }}>
      <HomeScreen />
    </View>
  );
}
