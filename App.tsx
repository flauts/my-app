import { StatusBar } from 'expo-status-bar';
import { Button, Text, View, Pressable } from 'react-native';
import MyButton from './components/MyButton';

export default function App() {
  return (
    <View className='justify-center' >
      <StatusBar style="dark" />
      <Text className="center m-20">
        AAAHOLLLAAA
      </Text>
      <MyButton icon='bookmark' />
      <Pressable className='bg-red-500' onPress={() => console.log('pressed')}>
        <Text>Press me</Text>
      </Pressable>
    </View>
  );
}

