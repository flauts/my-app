import { View, Text, Dimensions, Pressable, FlatList } from "react-native";
import React, { useState } from "react";
import { Modal } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AnimatedGradient from "./AnimatedGradient";

const { height: SCREEN_HEIGHT } = Dimensions.get("screen");

const CommentModal_Deprecated = ({
  post_id,
  onClose,
}: {
  post_id: number;
  onClose: () => void;
}) => {
  const insets = useSafeAreaInsets();

  // Adjust this value to control how far from the top the modal should appear
  const topOffset = SCREEN_HEIGHT * 0.5; // 50% from the top

  return (
    <Modal transparent animationType="slide" visible onRequestClose={onClose}>
      <View className="flex-1">
        <Pressable className="flex-1" onPress={onClose} />
        <View
          style={{
            position: "absolute",
            top: topOffset,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "white",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 20,
            paddingHorizontal: 16,
            shadowRadius: 20,
            shadowOpacity: 0.5,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 0 },
          }}
        >
          <AnimatedGradient mode={1} />
        </View>
      </View>
    </Modal>
  );
};

export default CommentModal_Deprecated;