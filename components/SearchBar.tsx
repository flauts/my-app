import React from "react";
import { View, TextInput } from "react-native";
import { SearchIcon } from "./Icons";
const SearchBar = () => {
  return (
    <View className="flex-row bg-gray-200 gap-x-4 items-center rounded-xl mx-5 py-4">
      <SearchIcon />
      <TextInput className="grow" placeholder="Search for something...." />
    </View>
  );
};

export default SearchBar;
