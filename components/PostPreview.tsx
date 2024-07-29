import { styled } from "nativewind";
import { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { FlatList } from "react-native";
import { BookmarkIcon, LikeIcon, ShareIcon } from "./Icons";
import { Link } from "expo-router";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import PostModal from "./PostModal";
import { Image } from "expo-image";

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
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function PostPreview({ post }: { post: Post }) {
  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator
        data={post.images.url}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            contentFit="cover"
            cachePolicy={"memory"}
            source={item}
            style={styles.image}
            transition={1000}
            placeholder={{ blurhash }}
          />
        )}
      />
      <View className="flex-row justify-between gap-x-5 px-3 pt-2 pb-3">
        <Link asChild href={`post/${post.id}`}>
          <Pressable className="flex-col items-left flex-shrink">
            <Text className="text-justify" style={styles.title}>
              {post.title}
            </Text>
            <Text className="text-justify" style={styles.description}>
              {post.description.slice(0, 100)}...
            </Text>
          </Pressable>
        </Link>
        <View className="flex-row gap-x-4">
          <View>
            <LikeIcon />
          </View>
          <View>
            <ShareIcon />
          </View>
          <View>
            <BookmarkIcon />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
