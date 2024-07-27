import { useState } from "react";
import {
  View,
  Text,
  Modal,
  Pressable,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

type Post = {
  id: number;
  user: string;
  title: string;
  description: string;
  images: {
    url: string[];
  };
};

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const PostModal = ({ post }: { post: Post }) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

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
        <Pressable
          onPress={() => setIsModalVisible(false)}
          style={{ height: insets.top * 2 }}
        ></Pressable>
        <GestureHandlerRootView>
          <GestureDetector gesture={swipeGesture}>
            <View
              className="flex-1 bg-white"
              style={{
                borderRadius: 20,
                shadowRadius: 10,
                shadowOpacity: 0.5,
                shadowColor: "black",
                shadowOffset: { width: 0, height: 0 },
              }}
            >
              <LinearGradient
                // Background Linear Gradient
                colors={["rgba(104,205,200,0.4)", "transparent"]}
                start={[0, 1]}
                end={[1, 0]}
                style={styles.gradient}
              />
              <View style={styles.carousel}>
                <FlatList
                  nestedScrollEnabled
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator
                  data={post.images.url}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <Image
                      cachePolicy="memory"
                      source={item}
                      style={styles.image}
                      transition={1000}
                      placeholder={{ blurhash }}
                    />
                  )}
                />
              </View>
              <View>
                <Text style={styles.title}>{post.title}</Text>
                <Text style={styles.description}>{post.description}</Text>
              </View>
            </View>
          </GestureDetector>
        </GestureHandlerRootView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    height: 300,
  },
  image: {
    width: SCREEN_WIDTH,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
  },
  description: {
    fontSize: 20,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: SCREEN_HEIGHT,
  },
});

export default PostModal;
