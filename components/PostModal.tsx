import { useState } from "react";
import {
  View,
  Text,
  Modal,
  Pressable,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import AnimatedGradient from "./AnimatedGradient";
import { CloseIcon, CommentIcon } from "./Icons";
import CommentModal from "./CommentModal";

type Post = {
  id: number;
  user: string;
  title: string;
  description: string;
  images: {
    url: string[];
  };
};

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const PostModal = ({ post, onClose }: { post: Post; onClose: () => void }) => {
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);

  const insets = useSafeAreaInsets();

  return (
    <View>
      <Modal
        animationType="slide"
        transparent
        visible={true}
        onRequestClose={onClose}
        presentationStyle="overFullScreen" //only ios look android later
      >
        <Pressable
          onPress={onClose}
          style={{ height: insets.top * 2 }}
        ></Pressable>
        <View
          className="flex-1 bg-white"
          style={{
            borderRadius: 20,
            shadowRadius: 10,
            shadowOpacity: 0.5,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 0 },
            paddingBottom: insets.bottom,
          }}
        >
          <AnimatedGradient mode={8} />
          <ScrollView>
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
            <View className="p-4">
              <Text className="mb-4" style={styles.title}>
                {post.title}
              </Text>
              <Text style={styles.description}>
                {post.description} Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Reprehenderit veniam voluptatem aspernatur ad
                sint voluptate, tempora nostrum similique hic doloribus!
                Provident necessitatibus maiores quam neque inventore rerum eos
                quae eveniet. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Illum voluptates praesentium corporis,
                repellendus placeat veniam libero tenetur recusandae assumenda,
                provident nobis. Laborum expedita omnis delectus fugiat nam quae
                consectetur quaerat. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quibusdam ut nesciunt fugiat recusandae
                aperiam, est maiores illum nisi assumenda corporis dicta esse
                possimus error laudantium repellat aliquid culpa repellendus
                officiis.
              </Text>
            </View>
            <View style={{ height: insets.bottom }}></View>
            {/* empty for space for buttons not obstruct text */}
          </ScrollView>
          <View className="absolute bottom-5 flex-row justify-between px-5">
            <View className="flex-1">
              <TouchableOpacity
                activeOpacity={0.85}
                className="rounded-full bg-blue-300 p-4 self-start"
                onPress={onClose}
              >
                <CloseIcon />
              </TouchableOpacity>
            </View>
            <View className="flex-1">
              <TouchableOpacity
                activeOpacity={0.85}
                className="rounded-full bg-blue-300 p-4 self-end"
                onPress={() => setIsCommentsVisible(!isCommentsVisible)}
              >
                <CommentIcon />
              </TouchableOpacity>
            </View>
          </View>
          {isCommentsVisible && (
            <CommentModal
              post_id={post.id}
              onClose={() => setIsCommentsVisible(false)}
            />
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    height: 350,
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
});

export default PostModal;
