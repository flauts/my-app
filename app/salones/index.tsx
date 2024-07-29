import SalonesScreen from "../../screens/SalonesScreen";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Index = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingBottom: insets.bottom }}>
      <SalonesScreen />
    </View>
  );
};

export default Index;
