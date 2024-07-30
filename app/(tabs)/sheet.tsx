// import {
//   View,
//   Text,
//   ScrollView,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";
// import React, { useCallback, useMemo, useState } from "react";
// import BottomSheet, {
//   BottomSheetBackdrop,
//   BottomSheetModal,
// } from "@gorhom/bottom-sheet";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
// import AnimatedGradient from "../../components/AnimatedGradient";
// import CommentModal_Deprecated from "../../components/CommentModal_Deprecated";
// import { Image } from "expo-image";
// import { CloseIcon, CommentIcon } from "../../components/Icons";
// import { Button } from "react-native-elements";
// import CustomBackdrop from "../../components/CustomBackdrop";

// type Post = {
//   id: number;
//   user: string;
//   title: string;
//   description: string;
//   images: {
//     url: string[];
//   };
// };

// const blurhash =
//   "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

// export default function Index() {
//   const [isCommentsVisible, setIsCommentsVisible] = useState(false);
//   const post = {
//     id: 1,
//     user: "@user1",
//     title: "Secretive Plotter",
//     description: "Who rises up from the place of nothing",
//     images: {
//       url: [
//         "https://steamuserimages-a.akamaihd.net/ugc/1796352800264815295/F70FC39CBEEC303C3B138FD253DEE23E320FBC2C/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
//         "https://i.pinimg.com/736x/a6/fc/1c/a6fc1ce13c67b789d94e6c84fd74e448.jpg",
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4SBpv0LNSlva5oaHcfT2AHpRrJvP8rRiEA&s",
//       ],
//     },
//   };
//   const snapPoints = useMemo(() => ["50%", "90%"], []);
//   const insets = useSafeAreaInsets();
//   const bottomSheetRef = React.useRef<BottomSheetModal>(null);
//   const handleOpen = () => {
//     bottomSheetRef.current?.present();
//   };
//   const handleClose = () => {
//     bottomSheetRef.current?.dismiss();
//   };

//   const renderBackdrop = useCallback(
//     (props: any) => (
//       <BottomSheetBackdrop
//         appearsOnIndex={[0, 1]}
//         disappearsOnIndex={-1}
//         {...props}
//         enableTouchThrough={false}
//       />
//     ),
//     []
//   );
//   return (
//     <View className="flex-1 pt-24">
//       <Button title="Open" onPress={handleOpen} />
//       <View
//         className="flex-1"
//         style={{
//           shadowOpacity: 0.8,
//           shadowRadius: 10,
//           shadowOffset: { width: 0, height: 0 },
//         }}
//       >
//         <BottomSheetModal
//           ref={bottomSheetRef}
//           snapPoints={snapPoints}
//           backgroundComponent={() => <AnimatedGradient mode={8} />}
//           backdropComponent={CustomBackdrop}
//           index={0}
//           enablePanDownToClose
//         >
//           <View>
//             <Text>AAAAAAAAAAAA</Text>
//           </View>
//         </BottomSheetModal>
//       </View>
//     </View>
//   );
// }

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
  BottomSheetTextInput,
  BottomSheetView,
  SCREEN_HEIGHT,
} from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { CloseIcon, CommentIcon } from "../../components/Icons";
import { FlatList, TextInput } from "react-native-gesture-handler";
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
  const snapPoints = useMemo(() => ["50%", "88%"], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={1}
        disappearsOnIndex={-1}
        enableTouchThrough={false}
        {...props}
      />
    ),
    []
  );
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top }}>
      <FlatList
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
          <View className="p-4 bg-red-300">
            <TextInput placeholder="Add a comment..." />
          </View>
        )}
        stickyHeaderIndices={[0]}
      />
    </View>
  );
});

export default CommentModal;
