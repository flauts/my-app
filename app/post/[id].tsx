import { View, Text } from "react-native";
import { useLocalSearchParams, Link } from "expo-router";
const Post = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Link href="/">
        <Text>Go back home</Text>
      </Link>
    </View>
  );
};

export default Post;
