import React, { useEffect, useState } from 'react';
import { Button, View, Text } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';

const API_KEY = 'POYuP1gG%2BSUT%2FffV%2FcjqBpEG2wzFHVb6tndEH7E4eTAkcsog7efdROUAMhgQ1wK7IgBrjMYRkgACV9agKNLcHA%3D%3D';

const HomeScreen = () => {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    axios.get(apiUrl)
      .then(response => {
        // 처음 10개의 포스트만 추출하여 상태에 설정합니다.
        setPosts(response.data.slice(0, 10));
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <View>
      {posts.map((post: { id: any; title: any }) => (
        <Text key={post.id}>{post.id}:{post.title}</Text>
      ))}
    </View>
  );
};

export default HomeScreen;
