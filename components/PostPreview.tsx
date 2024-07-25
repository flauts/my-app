import { styled } from 'nativewind';
import { View, Image } from 'react-native'
import PagerView from 'react-native-pager-view';
const PostPreview = () => {
    const images = [
        {
            'title':'Secretive Plotter',
            'url':'https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Ftliimptmiai91.jpg'
        },{
            'title':'The Great Plotter',
            'url':'https://i.pinimg.com/736x/a6/fc/1c/a6fc1ce13c67b789d94e6c84fd74e448.jpg'
        },{
            'title':'Chaos',
            'url':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4SBpv0LNSlva5oaHcfT2AHpRrJvP8rRiEA&s'
    
        }
    ]
    return (
        <View>
            <PagerView initialPage={0}>
            {images.map((image, index) => (
                <View className='justify-center content-center' key={index} collapsable={false}>
                    <Image
                        source={{uri: image.url}}
                        style={{width: 100, height: 100}}/>
                    </View>
            ))}
            </PagerView>
            </View>
    )
}

export default PostPreview