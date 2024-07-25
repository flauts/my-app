import { useState,useEffect, useRef} from 'react';
import { Text, Pressable,Animated } from 'react-native';
import { TextProps } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styled } from 'nativewind';


type MyButtonProps = {
    icon:string
    color?: string
    floating_text?: string
    iconStyle?: TextProps['style']
}


const MyButton = ({ iconStyle, icon, color = 'grey', floating_text = 'Waiting for something to happen?' }:MyButtonProps) => {
    const [isLongPressed, setIsLongPressed] = useState(false);
    const [isPressedOut, setIsPressedOut] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity is 0

        useEffect(() => {
            Animated.timing(fadeAnim, {
                toValue: isLongPressed ? 1 : 0, // Fade in if true, else fade out
                duration: 500*(isLongPressed?2:0.5), // Duration of the animation
                useNativeDriver: true, // Use native driver for better performance
            }).start();
        }, [isLongPressed]);

    return (
        <Pressable style={iconStyle}
        onPressOut={() => {setIsLongPressed(false); setIsPressedOut(!isPressedOut)}}
            onLongPress={() => setIsLongPressed(true)}>
            <Icon name={icon} size={30} color={!isPressedOut?"grey":"orange"} />
                <Animated.Text style={{ opacity: fadeAnim }} className="text-base text-gray-700">
                    {floating_text}
                </Animated.Text>
        </Pressable>
    );
};

export default styled(MyButton, {
    props:{
        iconStyle:true
    }
})