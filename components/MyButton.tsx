import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { Pressable, Animated, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styled } from 'nativewind';
import { Link } from 'expo-router';

type MyButtonProps = {
  icon: string;
  floatingText?: string;
  href?: string;
  style?: ViewStyle;
  onPress?: () => void;
};

const MyButton = forwardRef<View, MyButtonProps>(
  (
    {
      icon,
      floatingText = 'Waiting for something to happen?',
      href,
      style,
      onPress,
      ...props
    },
    ref
  ) => {
    const [isPressed, setIsPressed] = useState(false);
    const [isLongPressed, setIsLongPressed] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: isLongPressed ? 1 : 0,
        duration: isLongPressed ? 1000 : 250,
        useNativeDriver: true,
      }).start();
    }, [isLongPressed]);

    const handlePressIn = () => setIsPressed(true);
    const handlePressOut = () => {
      setIsPressed(false);
      setIsLongPressed(false);
      onPress?.();
    };
    const handleLongPress = () => setIsLongPressed(true);

    const renderContent = () => (
      <>
        <Icon name={icon} size={30} color={isPressed ? "orange" : "grey"} />
        <Animated.Text 
          style={{ opacity: fadeAnim }} 
          className="text-base text-gray-700"
        >
          {floatingText}
        </Animated.Text>
      </>
    );

    const pressableProps = {
      style: [style, { opacity: isPressed ? 0.8 : 1 }],
      onPressIn: handlePressIn,
      onPressOut: handlePressOut,
      onLongPress: handleLongPress,
      ...props
    };

    if (href) {
      return (
        <Link href={href} asChild>
          <Pressable {...pressableProps} ref={ref}>
            {renderContent()}
          </Pressable>
        </Link>
      );
    }

    return (
      <Pressable {...pressableProps} ref={ref}>
        {renderContent()}
      </Pressable>
    );
  }
);

export default styled(MyButton, {
  props: {
    style: true,
  },
});