import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { SalonIcon } from "../components/Icons";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 10,
  },
});

export default function SalonesScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="flex flex-row flex-wrap justify-around">
        {itemData.map((item, index) => {
          return <SalonIcon key={index} num={item} />;
        })}
      </View>
    </View>
  );
}

const itemData = [
  "A101",
  "M502",
  "A803",
  "A804",
  "A805",
  "M303",
  "A701",
  "A908",
  "A901",
  "Biblioteca",
  "Piso 11",
];
