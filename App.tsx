import { StatusBar } from 'expo-status-bar';
import { Button, Text, View, Pressable,StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyButton from './components/MyButton';
import PostPreview from './components/PostPreview';
import HomeScreen from './screens/HomeScreen';
import PagerView from 'react-native-pager-view';

const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Post" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}


