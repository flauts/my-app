import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SalonIcon } from "../components/Icons";
import { Stack } from "expo-router";

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
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Salones",
          headerBackTitleVisible: false,
          animation: "slide_from_bottom",
        }}
      />
      <ScrollView className="pt-4">
        <View className="flex-1 justify-center items-center">
          <View className="flex flex-row flex-wrap justify-around">
            {itemData.map((item, index) => {
              return <SalonIcon key={index} num={item} />;
            })}
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const itemData = [
  "A101",
  "A102",
  "A103",
  "A104",
  "A105",
  "A106",
  "A107",
  "A108",
  "A109",
  "A110",
  "A111",
  "A112",
  "A113",
  "A114",
  "A115",
  "A116",
  "A117",
  "A118",
  "A119",
  "A120",
  "B101",
  "B102",
  "B103",
  "B104",
  "B105",
  "B106",
  "B107",
  "B108",
  "B109",
  "B110",
  "B111",
  "B112",
  "B113",
  "B114",
  "B115",
  "B116",
  "B117",
  "B118",
  "B119",
  "B120",
  "C101",
  "C102",
  "C103",
  "C104",
  "C105",
  "C106",
  "C107",
  "C108",
  "C109",
  "C110",
  "C111",
  "C112",
  "C113",
  "C114",
  "C115",
  "C116",
  "C117",
  "C118",
  "C119",
  "C120",
  "D101",
  "D102",
  "D103",
  "D104",
  "D105",
  "D106",
  "D107",
  "D108",
  "D109",
  "D110",
  "D111",
  "D112",
  "D113",
  "D114",
  "D115",
  "D116",
  "D117",
  "D118",
  "D119",
  "D120",
  "E101",
  "E102",
  "E103",
  "E104",
  "E105",
  "E106",
  "E107",
  "E108",
  "E109",
  "E110",
  "E111",
  "E112",
  "E113",
  "E114",
  "E115",
  "E116",
  "E117",
  "E118",
  "E119",
  "E120",
  "Biblioteca",
  "Piso 11",
];
