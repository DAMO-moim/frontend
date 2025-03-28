import React, { useState } from 'react';
import {  View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import InputWithLabel from '../../components/InputWithLabel';
import { BLACK_COLOR, WHITE_COLOR } from '../../constants/colors';

const ChatRoomsScreen = ({ navigation, route }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: message,
          sender: 'me',
          time: new Date().toLocaleTimeString('ko-KR', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
          }),
        },
      ]);
      setMessage('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      
      </ScrollView>
      {/* Input Area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="메시지를 입력하세요."
          keyboardType="default"
          multiline={true}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Icon name="send" size={13} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F0F3',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#E5F3F2',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  input: {
    flex: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    fontSize: 14,
    height: 48,
    borderColor: BLACK_COLOR,
    borderWidth: 1,
    marginBottom: 4,
    paddingHorizontal: 10,
    backgroundColor: WHITE_COLOR,
    borderRadius: 8, // 둥근 모서리
  },
  sendButton: {
    padding: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
});

export default ChatRoomsScreen;
