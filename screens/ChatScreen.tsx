import React, { useState, useCallback, useEffect } from "react";
import { View } from "react-native";
import { Image } from "expo-image";
import { Bubble, GiftedChat, IMessage, Avatar } from "react-native-gifted-chat";
import WebSocketClient from "../service/WebSocketClient";

export default function ChatScreen({ name }: { name: string }) {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const onSend = (newMessages: IMessage[]) => {
    WebSocketClient.send(newMessages[0]);
  };

  useEffect(() => {
    return () => WebSocketClient.close();
  }, []);

  useEffect(() => {
    WebSocketClient.onReceiveMessage = (newMessage: IMessage[]) => {
      setMessages(GiftedChat.append(messages, newMessage));
    };
  }, [messages]);

  const user = {
    _id: name,
    name,
    avatar:
      "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png",
  };
  return (
    <GiftedChat
      bottomOffset={80}
      user={user}
      messages={messages}
      onSend={(messages) => onSend(messages)}
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
