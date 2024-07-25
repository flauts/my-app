import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import SearchBar from '../components/SearchBar'
import Header from '../components/Header';


const HomeScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{paddingTop:insets.top, paddingBottom:insets.bottom}}>
            <Header />
            <SearchBar />
            </View>
    )
}

export default HomeScreen