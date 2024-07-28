import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link, Stack } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const insets = useSafeAreaInsets();
  const header = () => {
    return (
      <LinearGradient colors={["#58CC02", "#2B8500"]} style={styles.header}>
        <View
          style={[
            styles.profileInfo,
            { paddingTop: insets.top, paddingBottom: 10 },
          ]}
        >
          <Link asChild href="/">
            <Text
              style={{
                position: "absolute",
                right: 210,
                top: insets.top,
              }}
            >
              Go back
            </Text>
          </Link>
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/women/44.jpg",
            }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Sarah Johnson</Text>
          <Text style={styles.username}>@sarahj</Text>
        </View>
      </LinearGradient>
    );
  };
  return (
    <View className="flex-1" style={{ paddingBottom: insets.bottom }}>
      <Stack.Screen
        options={{
          headerShown: true,
          header: header,
          headerTitle: "",
          headerBackTitleVisible: false,
        }}
      />
      <ScrollView className="pt-4">
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>128</Text>
            <Text style={styles.statLabel}>Day Streak</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>9,750</Text>
            <Text style={styles.statLabel}>Total XP</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>4</Text>
            <Text style={styles.statLabel}>Languages</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <View style={styles.achievementsContainer}>
            {["🏆", "🌟", "🎓", "🔥", "🌈", "🚀"].map((emoji, index) => (
              <View key={index} style={styles.achievement}>
                <Text style={styles.achievementEmoji}>{emoji}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Languages</Text>
          <View style={styles.languagesContainer}>
            {[
              { name: "Spanish", level: "Advanced", flag: "🇪🇸" },
              { name: "French", level: "Intermediate", flag: "🇫🇷" },
              { name: "German", level: "Beginner", flag: "🇩🇪" },
              { name: "Italian", level: "Beginner", flag: "🇮🇹" },
            ].map((language, index) => (
              <View key={index} style={styles.languageItem}>
                <Text style={styles.languageFlag}>{language.flag}</Text>
                <View>
                  <Text style={styles.languageName}>{language.name}</Text>
                  <Text style={styles.languageLevel}>{language.level}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileInfo: {
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FFF",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 10,
  },
  username: {
    fontSize: 16,
    color: "#FFF",
    opacity: 0.8,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#FFF",
    paddingVertical: 20,
    borderRadius: 20,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#58CC02",
  },
  statLabel: {
    fontSize: 14,
    color: "#777",
  },
  section: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  achievementsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  achievement: {
    width: 50,
    height: 50,
    backgroundColor: "#F0F0F0",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  achievementEmoji: {
    fontSize: 24,
  },
  languagesContainer: {
    marginTop: 10,
  },
  languageItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  languageFlag: {
    fontSize: 24,
    marginRight: 15,
  },
  languageName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  languageLevel: {
    fontSize: 14,
    color: "#777",
  },
  button: {
    backgroundColor: "#58CC02",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
