import { View,Text } from "react-native";
import {Slot} from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
export default function Layout(){
    const insets = useSafeAreaInsets();
    return (
        <View style={{paddingTop:insets.top,flex:1}}>
            <Slot />
        </View>
    );
}