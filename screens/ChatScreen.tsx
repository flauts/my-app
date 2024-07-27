import React, { useState, useCallback, useEffect } from "react";
import { View } from "react-native";
import { Image } from "expo-image";
import { Bubble, GiftedChat, IMessage, Avatar } from "react-native-gifted-chat";

export default function ChatScreen() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5jTKo4WuNTHYrShmskUJXipMid-jcnrAfAQ&s",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages: IMessage[]) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  }, []);

  return (
    <GiftedChat
      bottomOffset={80}
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={(props) => {
        return (
          <Bubble
            {...props}
            wrapperStyle={{
              left: {
                backgroundColor: "orange",
              },
              right: {
                backgroundColor: "#007bff",
              },
            }}
            textStyle={{
              left: {
                color: "black",
              },
              right: {
                color: "blue",
              },
            }}
          />
        );
      }}
    />
  );
}
