import { styled } from "nativewind";
import { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { FlatList } from "react-native";
import { BookmarkIcon, LikeIcon, ShareIcon } from "./Icons";
import { Link } from "expo-router";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import PostModal from "./PostModal";

type Post = {
  id: number;
  user: string;
  title: string;
  description: string;
  images: {
    url: string[];
  };
};

const StyledPressable = styled(Pressable);

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function PostPreview({ post }: { post: Post }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator
        data={post.images.url}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            resizeMode="cover"
            source={{ uri: item }}
            style={styles.image}
          />
        )}
      />
      <View className="flex-row justify-between gap-x-5 px-3 pt-2 pb-3">
        <Pressable
          className="flex-col items-left flex-shrink"
          onPressOut={() => setIsModalVisible(!isModalVisible)}
        >
          <Text className="text-justify" style={styles.title}>
            {post.title}
          </Text>
          <Text className="text-justify" style={styles.description}>
            {post.description.slice(0, 100)}...
          </Text>
        </Pressable>
        <View className="flex-row gap-x-4">
          <StyledPressable className={`active:opacity-50`}>
            <LikeIcon />
          </StyledPressable>
          <StyledPressable className={`active:opacity-50`}>
            <ShareIcon />
          </StyledPressable>
          <StyledPressable className={`active:opacity-50`}>
            <BookmarkIcon />
          </StyledPressable>
        </View>
      </View>
      {isModalVisible && <PostModal post={post} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: SCREEN_WIDTH,
    height: 400,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
  },
});
