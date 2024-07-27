import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import PostPreview from "../components/PostPreview";
import { FlatList } from "react-native";

const HomeScreen = () => {
  const feed = [
    {
      id: 1,
      user: "@user1",
      title: "Secretive Plotter",
      description: "Who rises up from the place of nothing",
      images: {
        url: [
          "https://steamuserimages-a.akamaihd.net/ugc/1796352800264815295/F70FC39CBEEC303C3B138FD253DEE23E320FBC2C/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
          "https://i.pinimg.com/736x/a6/fc/1c/a6fc1ce13c67b789d94e6c84fd74e448.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4SBpv0LNSlva5oaHcfT2AHpRrJvP8rRiEA&s",
        ],
      },
    },
    {
      id: 2,
      user: "@user2",
      title: "The Great Plotter",
      description: "Who rises up from the place of nothing",
      images: {
        url: [
          "https://steamuserimages-a.akamaihd.net/ugc/1796352800264815295/F70FC39CBEEC303C3B138FD253DEE23E320FBC2C/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
          "https://i.pinimg.com/736x/a6/fc/1c/a6fc1ce13c67b789d94e6c84fd74e448.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4SBpv0LNSlva5oaHcfT2AHpRrJvP8rRiEA&s",
        ],
      },
    },
    {
      id: 3,
      user: "@user3",
      title: "Chaos",
      description: "Who rises up from the place of nothing",
      images: {
        url: [
          "https://steamuserimages-a.akamaihd.net/ugc/1796352800264815295/F70FC39CBEEC303C3B138FD253DEE23E320FBC2C/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
          "https://i.pinimg.com/736x/a6/fc/1c/a6fc1ce13c67b789d94e6c84fd74e448.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4SBpv0LNSlva5oaHcfT2AHpRrJvP8rRiEA&s",
        ],
      },
    },
    {
      id: 4,
      user: "@user4",
      title: "The Great Plotter",
      description:
        "Who rises up from the place of nothing lorem ipsum dolor sit amet consectetur adipiscing elit",
      images: {
        url: [
          "https://steamuserimages-a.akamaihd.net/ugc/1796352800264815295/F70FC39CBEEC303C3B138FD253DEE23E320FBC2C/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
          "https://i.pinimg.com/736x/a6/fc/1c/a6fc1ce13c67b789d94e6c84fd74e448.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4SBpv0LNSlva5oaHcfT2AHpRrJvP8rRiEA&s",
        ],
      },
    },
    {
      id: 5,
      user: "@user5",
      title: "The Great Plotter",
      description: "Who rises up from the place of nothing",
      images: {
        url: [
          "https://steamuserimages-a.akamaihd.net/ugc/1796352800264815295/F70FC39CBEEC303C3B138FD253DEE23E320FBC2C/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
          "https://i.pinimg.com/736x/a6/fc/1c/a6fc1ce13c67b789d94e6c84fd74e448.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4SBpv0LNSlva5oaHcfT2AHpRrJvP8rRiEA&s",
        ],
      },
    },
    {
      id: 6,
      user: "@user6",
      title: "The Great Plotter",
      description: "Who rises up from the place of nothing",
      images: {
        url: [
          "https://steamuserimages-a.akamaihd.net/ugc/1796352800264815295/F70FC39CBEEC303C3B138FD253DEE23E320FBC2C/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
          "https://i.pinimg.com/736x/a6/fc/1c/a6fc1ce13c67b789d94e6c84fd74e448.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4SBpv0LNSlva5oaHcfT2AHpRrJvP8rRiEA&s",
        ],
      },
    },
  ];

  const header = () => {
    return (
      <View className="pb-4 bg-white">
        <Header />
        <SearchBar />
      </View>
    );
  };
  const footer = () => {
    return (
      <View className="items-center">
        <Text className="text-xl">Damn thats crazy</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        nestedScrollEnabled
        ListHeaderComponent={header}
        ListFooterComponent={footer}
        ListFooterComponentStyle={{ paddingBottom: 15 }}
        data={feed}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PostPreview post={item} />}
      />
    </View>
  );
};

export default HomeScreen;
