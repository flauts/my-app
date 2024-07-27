import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Switch,
  Pressable,
  StyleSheet,
} from "react-native";
import { Link, Stack } from "expo-router";

const SettingsScreen = () => {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Settings",
          headerBackTitleVisible: false,
        }}
      />

      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        <Link href="/profile" style={styles.link}>
          Profile Information
        </Link>
        <Link href="/change-password" style={styles.link}>
          Change Password
        </Link>
        <Link href="/linked-accounts" style={styles.link}>
          Linked Accounts
        </Link>

        <Text style={styles.sectionTitle}>Notification Settings</Text>
        <View style={styles.settingItem}>
          <Text>Push Notifications</Text>
          <Switch
            value={pushNotifications}
            onValueChange={setPushNotifications}
          />
        </View>
        <View style={styles.settingItem}>
          <Text>Email Notifications</Text>
          <Switch
            value={emailNotifications}
            onValueChange={setEmailNotifications}
          />
        </View>
        <View style={styles.settingItem}>
          <Text>SMS Notifications</Text>
          <Switch
            value={smsNotifications}
            onValueChange={setSmsNotifications}
          />
        </View>

        <Text style={styles.sectionTitle}>Privacy Settings</Text>
        <Link href="/data-sharing" style={styles.link}>
          Data Sharing Preferences
        </Link>
        <Link href="/location-services" style={styles.link}>
          Location Services
        </Link>
        <Link href="/ad-preferences" style={styles.link}>
          Ad Preferences
        </Link>

        <Text style={styles.sectionTitle}>Security Settings</Text>
        <Link href="/two-factor-auth" style={styles.link}>
          Two-Factor Authentication
        </Link>
        <Link href="/app-lock" style={styles.link}>
          App Lock
        </Link>
        <Link href="/active-sessions" style={styles.link}>
          Session Management
        </Link>

        <Text style={styles.sectionTitle}>Display Settings</Text>
        <View style={styles.settingItem}>
          <Text>Dark Mode</Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>
        <Link href="/font-size" style={styles.link}>
          Font Size
        </Link>
        <Link href="/language" style={styles.link}>
          Language Preferences
        </Link>

        <Text style={styles.sectionTitle}>App Settings</Text>
        <Pressable className="active:opacity-80" style={styles.button}>
          <Text style={styles.buttonText}>Clear Cache</Text>
        </Pressable>
        <Link href="/data-usage" style={styles.link}>
          Data Usage Preferences
        </Link>
        <Link href="/offline-mode" style={styles.link}>
          Offline Mode
        </Link>

        <Text style={styles.sectionTitle}>Help & Support</Text>
        <Link href="/faq" style={styles.link}>
          FAQ
        </Link>
        <Link href="/contact-support" style={styles.link}>
          Contact Support
        </Link>
        <Link href="/report-problem" style={styles.link}>
          Report a Problem
        </Link>

        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.versionText}>App Version: 1.0.0</Text>
        <Link href="/terms" style={styles.link}>
          Terms of Service
        </Link>
        <Link href="/privacy" style={styles.link}>
          Privacy Policy
        </Link>

        <Pressable className="active:opacity-80" style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </Pressable>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  link: {
    fontSize: 16,
    color: "#007AFF",
    marginBottom: 8,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  versionText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  logoutButton: {
    backgroundColor: "#FF3B30",
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 32,
  },
  logoutButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default SettingsScreen;
