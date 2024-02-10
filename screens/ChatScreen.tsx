import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import axios from 'axios';

const ChatScreen = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const lastRequestTime = useRef(0);

  // Function to send message to ChatGPT with rate limiting
  const sendMessage = async () => {
    if (!inputText.trim()) return;
  
    // Check if less than 1 second has passed since the last request
    if (Date.now() - lastRequestTime.current < 1000) {
      console.log('Rate limit exceeded. Please wait before sending another message.');
      return;
    }
  
    setLoading(true); // Set loading state while fetching response
  
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo', // Model name
        prompt: inputText,
        max_tokens: 50, // Maximum number of tokens
        temperature: 0.7, // Diversity of responses
        n: 1 // Number of responses
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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' // Replace YOUR_API_KEY with your OpenAI API key
        }
      });
  
      if (response.data && response.data.choices && response.data.choices.length > 0) {
        const botResponse = response.data.choices[0].text;
        setMessages([...messages, { text: inputText, sender: 'user' }, { text: botResponse, sender: 'bot' }]);
      }
    } catch (error) {
      console.error('Error fetching response from ChatGPT:', error);
    } finally {
      setLoading(false); // Set loading state to false after response
      setInputText(''); // Clear input text
      lastRequestTime.current = Date.now(); // Update last request time
    }
  };
  

  return (
    <View style={{ flex: 1 }}>
       <View style={{ flex: 1, padding: 10 }}>
        {messages.map((message, index) => (
          <View key={index} style={{ alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start' }}>
            <Text style={{ padding: 5, backgroundColor: message.sender === 'user' ? '#DCF8C6' : '#E5E7E9', borderRadius: 5, marginTop: 5, marginBottom: 5 }}>
              {message.text}
            </Text>
          </View>
        ))}
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <TextInput
          style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, marginRight: 10, paddingLeft: 10 }}
          onChangeText={text => setInputText(text)}
          value={inputText}
          placeholder="Type a message..."
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
      {loading && <ActivityIndicator size="large" style={{ alignSelf: 'center' }} />}
    </View>
  );
};

export default ChatScreen;
