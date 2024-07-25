import React from 'react'
import {View, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
const SearchBar = () => {
  return (
    <View className='flex-row bg-gray-200 gap-x-4 items-center rounded-xl mx-5 py-4'>
    <Icon className="grow-0" name='search' size={15} color='gray' />
    <TextInput className="grow" placeholder='Search for something....' />
    </View>
)
}

export default SearchBar