// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Providers from './source/providers/Providers';


{/*Coding of various components seperated into their own scrpts*/}
{/* Function returns data from various components */}
function App() {
  return (
    <>
      <Providers />
    </>
  );
}

export default App;