import React from 'react'
import {View,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
const Header = () => {
  return (
    <View className='flex-row mx-3 my-4 justify-between'>
        <Icon name='user' size={22}/>
        <View className='flex-row gap-x-8'>
        <Icon name="bell" size={22}/>
        <Icon name='gear' size={22} />
        </View>
    </View>
)
}

export default Header