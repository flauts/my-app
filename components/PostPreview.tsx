import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import PagerView from 'react-native-pager-view';

type Post ={
    user:string;
    title:string;
    description:string;
    images:{
        url:string[];
    };
}


export default function PostPreview(post:Post) {
    return (
        <View style={styles.container}>
          <PagerView style={styles.container} initialPage={0}>
            {post.images.url.map((image_url,index) =>(
                <View style={styles.page} key={index}>
                    <Image source={{uri:image_url}} style={{width:'100%',height:'100%'}} />
                    </View>
            ))}
          </PagerView>
          <Text>{post.title}</Text>
          <Text>{post.description}</Text>

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