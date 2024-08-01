import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Dimensions,
  ScrollView,
  TextInput,
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
  BottomSheetTextInput,
  BottomSheetView,
  SCREEN_HEIGHT,
} from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AnimatedGradient from "./AnimatedGradient";
import CommentModal_Deprecated from "./CommentModal_Deprecated";
import { Image } from "expo-image";
import { CloseIcon, CommentIcon, PostIcon } from "./Icons";
import CustomBackdrop from "./CustomBackdrop";
import { FlatList } from "react-native-gesture-handler";
import { Button } from "react-native-elements/dist/buttons/Button";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

type Comment = {
  id: number;
  user: string;
  comment: string;
  date: Date;
};

const comments: Comment[] = [
  {
    id: 1,
    user: "Alice",
    comment: "This is a post!",
    date: new Date("2023-10-01T10:00:00Z"),
  },
  {
    id: 2,
    user: "Bob",
    comment: "I totally agree with you.",
    date: new Date("2023-10-02T11:30:00Z"),
  },
  {
    id: 3,
    user: "Charlie",
    comment: "Thanks for sharing this information.",
    date: new Date("2023-10-03T12:45:00Z"),
  },
  {
    id: 4,
    user: "Diana",
    comment: "Interesting perspective!",
    date: new Date("2023-10-04T14:20:00Z"),
  },
  {
    id: 5,
    user: "Eve",
    comment: "I learned something new today.",
    date: new Date("2023-10-05T15:50:00Z"),
  },
  {
    id: 6,
    user: "Frank",
    comment: "Great post, keep it up!",
    date: new Date("2023-10-06T16:00:00Z"),
  },
  {
    id: 7,
    user: "Grace",
    comment: "I have a different opinion.",
    date: new Date("2023-10-07T17:15:00Z"),
  },
  {
    id: 8,
    user: "Hank",
    comment: "Can you provide more details?",
    date: new Date("2023-10-08T18:30:00Z"),
  },
  {
    id: 9,
    user: "Ivy",
    comment: "This is very helpful, thanks!",
    date: new Date("2023-10-09T19:45:00Z"),
  },
  {
    id: 10,
    user: "Jack",
    comment: "Looking forward to your next post.",
    date: new Date("2023-10-10T20:00:00Z"),
  },
  {
    id: 11,
    user: "s",
    comment: "s",
    date: new Date("2023-10-10T20:00:00Z"),
  },
  {
    id: 12,
    user: "s",
    comment: "s",
    date: new Date("2023-10-10T20:00:00Z"),
  },
  {
    id: 13,
    user: "s",
    comment: "s",
    date: new Date("2023-10-10T20:00:00Z"),
  },
  {
    id: 14,
    user: "s",
    comment: "s",
    date: new Date("2023-10-10T20:00:00Z"),
  },
  {
    id: 15,
    user: "s",
    comment: "s",
    date: new Date("2023-10-10T20:00:00Z"),
  },
  {
    id: 16,
    user: "s",
    comment: "s",
    date: new Date("2023-10-10T20:00:00Z"),
  },
  {
    id: 17,
    user: "s",
    comment: "s",
    date: new Date("2023-10-10T20:00:00Z"),
  },
];

interface CommentProps {
  post_id: number;
}

type Ref = BottomSheetModal;

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const CommentModal = forwardRef<Ref, CommentProps>((post_id, ref) => {
  console.log("comment modal rendered");
  const ref1 = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["50%", "88%"], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={1}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );
  const insets = useSafeAreaInsets();

  return (
    <BottomSheetModal
      stackBehavior="push"
      snapPoints={snapPoints}
      ref={ref1}
      backdropComponent={renderBackdrop}
      index={0}
      style={{
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 20,
      }}
      //   backgroundStyle={{ backgroundColor: "blue" }}
      //   backgroundComponent={() => <AnimatedGradient mode={8} />}
    >
      <BottomSheetFlatList
        showsVerticalScrollIndicator
        keyExtractor={(item, index) => index.toString()}
        data={comments}
        renderItem={({ item }) => (
          <View className="p-4">
            <Text>
              {item.user} - {item.comment}
            </Text>
            <Text>{item.date.toDateString()}</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View className="p-4 bg-red-100 flex-row justify-between ">
            <TextInput
              className="flex-1"
              multiline
              maxLength={200}
              placeholder="Add a comment..."
            />
            <TouchableOpacity className="mx-2">
              <PostIcon />
            </TouchableOpacity>
          </View>
        )}
        stickyHeaderIndices={[0]}
      />
    </BottomSheetModal>
  );
});

export default CommentModal;
