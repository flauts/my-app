import { useState } from "react";
import { View, Text, Modal, Pressable } from "react-native";
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";

type Post = {
  id: number;
  user: string;
  title: string;
  description: string;
  images: {
    url: string[];
  };
};

const PostModal = ({ post }: { post: Post }) => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const swipeGesture = Gesture.Fling()
    .direction(Directions.DOWN)
    .onEnd(() => {
      setIsModalVisible(false);
    });

  return (
    <View>
      <Modal
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        presentationStyle="overFullScreen"
      >
        <GestureHandlerRootView>
          <GestureDetector gesture={swipeGesture}>
            <View className="flex-1 justify-center items-center">
              <Text>Post {post.id}</Text>
              <Pressable onPressOut={() => setIsModalVisible(false)}>
                <Text>Close</Text>
              </Pressable>
            </View>
          </GestureDetector>
        </GestureHandlerRootView>
      </Modal>
    </View>
  );
};
export default PostModal;
