import { View, Text,StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import SearchBar from '../components/SearchBar'
import Header from '../components/Header';
import PostPreview from '../components/PostPreview';

const HomeScreen = () => {
    const insets = useSafeAreaInsets();
    return (
        <View style={{flex:1,paddingTop:insets.top, paddingBottom:insets.bottom}}>
            <Header />
            <SearchBar />
            <PostPreview />
            </View>
    )
}


export default HomeScreen