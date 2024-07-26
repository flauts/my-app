import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { FlatList } from 'react-native';

type Post = {
    user: string;
    title: string;
    description: string;
    images: {
        url: string[];
    };
}


const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function PostPreview({ post }: { post: Post }) {

    return (
        <View style={styles.container}>
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator
          data={post.images.url}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image resizeMode='cover' source={{ uri: item }} style={styles.image} />
          )}
        />
        <View className='flex-col items-left'>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.description}>{post.description}</Text>
      </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: SCREEN_WIDTH,
        height: 400,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
    },
});