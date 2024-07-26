import { View, Text,StyleSheet, Image, Pressable, NativeSyntheticEvent, NativeScrollEvent, Dimensions} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import SearchBar from '../components/SearchBar'
import Header from '../components/Header';
import PostPreview from '../components/PostPreview';
import { FlatList,PanResponder,PanResponderGestureState } from 'react-native';
import PagerView from 'react-native-pager-view';
import { Divider } from '@rneui/themed';
import { useState,useRef,useCallback } from 'react';


const HomeScreen = () => {
    const feed = [
        {
            'user':'@user1',
            'title':'Secretive Plotter',
            'description':'Who rises up from the place of nothing',
            'images':{
                'url':['https://steamuserimages-a.akamaihd.net/ugc/1796352800264815295/F70FC39CBEEC303C3B138FD253DEE23E320FBC2C/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
                'https://i.pinimg.com/736x/a6/fc/1c/a6fc1ce13c67b789d94e6c84fd74e448.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4SBpv0LNSlva5oaHcfT2AHpRrJvP8rRiEA&s'
                ]
            }
        },
        {
            'user':'@user2',
            'title':'The Great Plotter',
            'description':'Who rises up from the place of nothing',
            'images':{
                'url':['https://steamuserimages-a.akamaihd.net/ugc/1796352800264815295/F70FC39CBEEC303C3B138FD253DEE23E320FBC2C/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
                'https://i.pinimg.com/736x/a6/fc/1c/a6fc1ce13c67b789d94e6c84fd74e448.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4SBpv0LNSlva5oaHcfT2AHpRrJvP8rRiEA&s'
                ]
            }
        },{
            'user':'@user3',
            'title':'Chaos',
            'description':'Who rises up from the place of nothing',
            'images':{
                'url':['https://steamuserimages-a.akamaihd.net/ugc/1796352800264815295/F70FC39CBEEC303C3B138FD253DEE23E320FBC2C/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
                'https://i.pinimg.com/736x/a6/fc/1c/a6fc1ce13c67b789d94e6c84fd74e448.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4SBpv0LNSlva5oaHcfT2AHpRrJvP8rRiEA&s'
                ]
            }
        },
        {
            'user':'@user4',
            'title':'The Great Plotter',
            'description':'Who rises up from the place of nothing',
            'images':{
                'url':['https://steamuserimages-a.akamaihd.net/ugc/1796352800264815295/F70FC39CBEEC303C3B138FD253DEE23E320FBC2C/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
                    'https://i.pinimg.com/736x/a6/fc/1c/a6fc1ce13c67b789d94e6c84fd74e448.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4SBpv0LNSlva5oaHcfT2AHpRrJvP8rRiEA&s'
                ]
            }
        },
        {
            'user':'@user5',
            'title':'The Great Plotter',
            'description':'Who rises up from the place of nothing',
            'images':{
                'url':['https://steamuserimages-a.akamaihd.net/ugc/1796352800264815295/F70FC39CBEEC303C3B138FD253DEE23E320FBC2C/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
                    'https://i.pinimg.com/736x/a6/fc/1c/a6fc1ce13c67b789d94e6c84fd74e448.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4SBpv0LNSlva5oaHcfT2AHpRrJvP8rRiEA&s'
                ]
            }
        },
        {
            'user':'@user6',
            'title':'The Great Plotter',
            'description':'Who rises up from the place of nothing',
            'images':{
                'url':['https://steamuserimages-a.akamaihd.net/ugc/1796352800264815295/F70FC39CBEEC303C3B138FD253DEE23E320FBC2C/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
                    'https://i.pinimg.com/736x/a6/fc/1c/a6fc1ce13c67b789d94e6c84fd74e448.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4SBpv0LNSlva5oaHcfT2AHpRrJvP8rRiEA&s'
                ]
            }
        }
    ];


    const header = () => {
        return (
          <View className='mb-4'>
            <Header />
            <SearchBar />
            <Divider orientation="vertical" width={6} />
          </View>
        );
      };

  
    const insets = useSafeAreaInsets();
    return (
        <View style={{paddingTop:insets.top, paddingBottom:insets.bottom,flex:1}}>
            <FlatList 
            nestedScrollEnabled
            ListHeaderComponent={header}
            data={feed}
            keyExtractor={(item,index) => index.toString()}
            renderItem={({item}) => (
                <PostPreview post={item} />
            )}
 />
        </View>
    )
}

export default HomeScreen