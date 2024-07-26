import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
const Post = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Post</Text>
    </View>
  );
};

export default Post;
