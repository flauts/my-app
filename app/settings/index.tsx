import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import MyButton from '../../components/MyButton';
const SettingsPage = () => {

    return (
        <View>
            <Text>Settings</Text>
            <Link asChild href='/'>
            <MyButton icon='home'/>
            </Link>
        </View>
    );
};

export default SettingsPage;