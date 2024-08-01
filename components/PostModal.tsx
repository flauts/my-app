import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import React, { forwardRef, useCallback, useMemo, useRef, memo } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { CommentIcon, LikeIcon } from "./Icons";

// const CommentModal = lazy(() => import("./CommentModal"));
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

type Ref = BottomSheetModal;

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const PostModal = forwardRef<Ref, Post>((post, ref) => {
  console.log("post modal rendered");
  const commentRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["88%"], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        enableTouchThrough={false}
        {...props}
      />
    ),
    []
  );
  const insets = useSafeAreaInsets();

  return (
    <BottomSheetModal
      snapPoints={snapPoints}
      ref={ref}
      backdropComponent={renderBackdrop}
      index={0}
      handleStyle={{ position: "absolute", right: 0, left: 0 }}
      style={{
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 20,
      }}
      // backgroundComponent={() => <AnimatedGradient mode={1} />}
    >
      <BottomSheetScrollView>
        <View className="h-[350]">
          <FlatList
            pagingEnabled
            nestedScrollEnabled
            getItemLayout={(item, index) => ({
              length: SCREEN_WIDTH,
              offset: SCREEN_WIDTH * index,
              index,
            })}
            horizontal
            showsHorizontalScrollIndicator
            keyExtractor={(item, index) => index.toString()}
            data={post.images.url}
            renderItem={({ item }) => (
              <Image
                source={item}
                cachePolicy="disk"
                style={{ width: SCREEN_WIDTH, height: 350, borderRadius: 15 }}
                transition={1000}
                placeholder={{ blurhash }}
              />
            )}
          />
        </View>
        <View className="p-4">
          <Text className="mb-4">{post.title}</Text>
          <Text>{post.description}</Text>
        </View>
        <View style={{ height: insets.bottom * 2 }}></View>
        {/* empty for space for buttons not obstruct text */}
      </BottomSheetScrollView>
      <View className="absolute bottom-5 flex-row justify-between px-5">
        <View className="flex-1">
          <TouchableOpacity
            activeOpacity={0.85}
            className="rounded-full bg-blue-300 p-4 self-start"
          >
            <LikeIcon />
          </TouchableOpacity>
        </View>
        <View className="flex-1">
          <TouchableOpacity
            activeOpacity={0.85}
            className="rounded-full bg-blue-300 p-4 self-end"
            onPress={() => commentRef.current?.present()}
          >
            <CommentIcon />
          </TouchableOpacity>
        </View>
      </View>
      <CommentModal post_id={post.id} ref={commentRef} />
    </BottomSheetModal>
  );
});

export default memo(PostModal);
