import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import PagerView from 'react-native-pager-view';

const images = [
    {
        'title':'Secretive Plotter',
        'url':'https://steamuserimages-a.akamaihd.net/ugc/1796352800264815295/F70FC39CBEEC303C3B138FD253DEE23E320FBC2C/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
    },{
        'title':'The Great Plotter',
        'url':'https://i.pinimg.com/736x/a6/fc/1c/a6fc1ce13c67b789d94e6c84fd74e448.jpg'
    },{
        'title':'Chaos',
        'url':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4SBpv0LNSlva5oaHcfT2AHpRrJvP8rRiEA&s'

    }
]

export default function PostPreview() {
    return (
        <View style={styles.container}>
          <PagerView style={styles.container} initialPage={0}>
            {images.map((image,index) =>(
                <View style={styles.page} key={index}>
                    <Image source={{uri:image.url}} style={{width:'100%',height:'100%'}} />
                    </View>
            ))}
          </PagerView>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      page: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    });