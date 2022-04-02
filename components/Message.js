import React, { useState, useCallback, useEffect } from 'react'
import { View,Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
 
export function NewMessage() {
  const [messages, setMessages] = useState([]);
 
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])
 
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
 
  const scrollToBottomComponent = (props) =>{
      return(
          <FontAwesome {...props} name="angle-double-down" size="22" color="#333" />
      );
  }

  return (
      
      
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  )
}