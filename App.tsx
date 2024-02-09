// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SecScreen from './screens/SecScreen';
import MyScreen from './screens/MyScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Sec" component={SecScreen} />
        <Tab.Screen name="My" component={MyScreen} />
        {/* Add more screens here */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
