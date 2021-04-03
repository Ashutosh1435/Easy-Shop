import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LogBox } from 'react-native';
import Header from './Screens/Shared/Header'
import ProductContainer from './Screens/Products/ProductContainer';
import { NavigationContainer } from '@react-navigation/native';
import Main from './Navigators/Main';
//  To ignore the all warnings, not recommended during development...
LogBox.ignoreAllLogs(true);
export default function App() {
  return (
    <NavigationContainer>
      <Header/>
      <Main/>
    </NavigationContainer>

  );
}


