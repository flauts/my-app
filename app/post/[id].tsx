import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import AnimatedGradient from "../../components/AnimatedGradient";
import { CloseIcon, CommentIcon } from "../../components/Icons";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import { usePostContext } from "../../context/PostContext";

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

const PostModal = () => {
  const { id } = useLocalSearchParams();
  const { posts } = usePostContext();
  const post = posts.find((post) => post.id === Number(id));
  const insets = useSafeAreaInsets();

  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Post",
          presentation: "modal",
        }}
      />
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
        <AnimatedGradient />
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
              sint voluptate, tempora nostrum similique hic doloribus! Provident
              necessitatibus maiores quam neque inventore rerum eos quae
              eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Illum voluptates praesentium corporis, repellendus placeat veniam
              libero tenetur recusandae assumenda, provident nobis. Laborum
              expedita omnis delectus fugiat nam quae consectetur quaerat. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ut
              nesciunt fugiat recusandae aperiam, est maiores illum nisi
              assumenda corporis dicta esse possimus error laudantium repellat
              aliquid culpa repellendus officiis.
            </Text>
          </View>
          <View style={{ height: insets.bottom }}></View>
          {/* empty for space for buttons not obstruct text */}
        </ScrollView>
        <View className="absolute bottom-5 flex-row justify-between px-5">
          <View className="flex-1">
            <Link asChild href="../">
              <TouchableOpacity
                activeOpacity={0.85}
                className="rounded-full bg-blue-300 p-4 self-start"
              >
                <CloseIcon />
              </TouchableOpacity>
            </Link>
          </View>
          <View className="flex-1">
            <TouchableOpacity
              activeOpacity={0.85}
              className="rounded-full bg-blue-300 p-4 self-end"
            >
              <CommentIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
