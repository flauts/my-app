import HomeScreen from "../../screens/HomeScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { Animated } from "react-native-maps";
import AnimatedGradient from "../../components/AnimatedGradient";

export default function Index() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top }}>
      {/* <AnimatedGradient /> */}
      <HomeScreen />
    </View>
  );
}
