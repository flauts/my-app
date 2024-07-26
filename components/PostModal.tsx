import { useState } from "react";
import { View, Text, Modal, Pressable } from "react-native";
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
  const insets = useSafeAreaInsets();
  return (
    <View>
      <Modal
        animationType="slide"
        transparent
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        presentationStyle="overFullScreen" //only ios look android later
      >
        <GestureHandlerRootView>
          <GestureDetector gesture={swipeGesture}>
            <View
              className="flex-1 justify-center items-center"
              style={{
                marginTop: insets.top * 2,
                borderRadius: 20,
                shadowRadius: 10,
                shadowOpacity: 0.3,
                shadowColor: "black",
                shadowOffset: { width: 0, height: 0 },
              }}
            >
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
