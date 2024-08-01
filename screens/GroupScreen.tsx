import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
} from "react-native";
import ChatScreen from "./ChatScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { Divider } from "@rneui/themed";

const GroupScreen = () => {
  const [name, setName] = useState("");
  const [isEnter, setIsEnter] = useState(false);
  const insets = useSafeAreaInsets();
  if (!isEnter)
    return (
      <View
        style={{ flex: 1, paddingTop: insets.top, paddingHorizontal: "4%" }}
      >
        <View>
          <Text className="text-[30px] font-bold py-2">Groups</Text>
          <ScrollView
            className="py-4"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View className="flex-row gap-x-8">
              <View className="flex-1 items-center justify-center">
                <Text className="text-[20px] font-bold">Group 1</Text>
              </View>
              <View className="flex-1 items-center justify-center">
                <Text className="text-[20px] font-bold">Group 2</Text>
              </View>
              <View className="flex-1 items-center justify-center">
                <Text className="text-[20px] font-bold">Group 3</Text>
              </View>
              <View className="flex-1 items-center justify-center">
                <Text className="text-[20px] font-bold">Group 4</Text>
              </View>
              <View className="flex-1 items-center justify-center">
                <Text className="text-[20px] font-bold">Group 5</Text>
              </View>
            </View>
          </ScrollView>
          <Divider />
        </View>
        <View className="flex-1 items-left justify-start">
          <View className="py-10">
            <Text className="text-[25px]">Welcome to Groups!</Text>
            <Text className="text-base mt-3">
              Se parte de las distintas comunidades de UTEC, ya sea grupos
              oficiales o creados por la comunidad!
            </Text>
            <Pressable
              className="bg-blue-500 rounded-md p-4 mt-4 active:bg-blue-700"
              onPress={() => setIsEnter(false)}
            >
              <Text className="text-white text-center">Create a Group</Text>
            </Pressable>
          </View>
          {/* flatlist de grupos */}

          <TextInput
            style={styles.textInput}
            textAlign="center"
            value={name}
            placeholder="Name"
            onChangeText={(text) => setName(text)}
          />
          <Button title="Enter" onPress={() => setIsEnter(true)} />
        </View>
      </View>
    );
  else return <ChatScreen name={name} />;
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "50%",
  },
});

export default GroupScreen;
