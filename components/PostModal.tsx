import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetScrollView,
  SCREEN_HEIGHT,
} from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AnimatedGradient from "./AnimatedGradient";
import CommentModal_Deprecated from "./CommentModal_Deprecated";
import { Image } from "expo-image";
import { CloseIcon, CommentIcon } from "./Icons";
import CustomBackdrop from "./CustomBackdrop";
import { FlatList } from "react-native-gesture-handler";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
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
  const modalCommentRef = useRef<BottomSheetModal>(null);
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
            horizontal
            showsHorizontalScrollIndicator
            keyExtractor={(item, index) => index.toString()}
            data={post.images.url}
            renderItem={({ item }) => (
              <Image
                source={item}
                cachePolicy="memory"
                style={{ width: SCREEN_WIDTH, height: 350, borderRadius: 15 }}
                transition={1000}
                placeholder={{ blurhash }}
              />
            )}
          />
        </View>
        <View className="p-4">
          <Text className="mb-4">{post.title}</Text>
          <Text>
            {post.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reprehenderit veniam voluptatem aspernatur ad sint
            voluptate, tempora nostrum similique hic doloribus! Provident
            necessitatibus maiores quam neque inventore rerum eos quae eveniet.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            voluptates praesentium corporis, repellendus placeat veniam libero
            tenetur recusandae assumenda, provident nobis. Laborum expedita
            omnis delectus fugiat nam quae consectetur quaerat. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quibusdam ut nesciunt
            fugiat recusandae aperiam, est maiores illum nisi assumenda corporis
            dicta esse possimus error laudantium repellat aliquid culpa
            repellendus officiis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Molestiae vel laudantium possimus maxime fugit
            rerum necessitatibus corporis quod eaque ratione atque aliquam
            beatae ipsam, in laborum adipisci temporibus dicta vitae? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Magni, aliquam?
            Recusandae ea consectetur ducimus. Ut excepturi omnis assumenda quas
            odit quasi molestiae? Ut, non ad laboriosam molestiae harum delectus
            quae! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Facere odit magnam possimus. Reprehenderit sit aspernatur ex id,
            nisi totam, laudantium similique laborum nemo neque saepe facilis
            mollitia deserunt harum? Dignissimos?
          </Text>
        </View>
        <View style={{ height: insets.bottom * 2 }}></View>
        {/* empty for space for buttons not obstruct text */}
      </BottomSheetScrollView>
      <View className="absolute bottom-5 flex-row justify-between px-5">
        <View className="flex-1">
          <TouchableOpacity
            activeOpacity={0.85}
            className="rounded-full bg-blue-300 p-4 self-start"
            onPress={() => ref?.current?.dismiss()}
          >
            <CloseIcon />
          </TouchableOpacity>
        </View>
        <View className="flex-1">
          <TouchableOpacity
            activeOpacity={0.85}
            className="rounded-full bg-blue-300 p-4 self-end"
            onPress={() => modalCommentRef.current?.present()}
          >
            <CommentIcon />
          </TouchableOpacity>
        </View>
      </View>
      <CommentModal post_id={post.id} ref={modalCommentRef} />
    </BottomSheetModal>
  );
});

export default PostModal;
