import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, LogBox } from 'react-native';
import Header from './Screens/Shared/Header'
import ProductContainer from './Screens/Products/ProductContainer';
//  To ignore the all warnings, not recommended during development...
LogBox.ignoreAllLogs(true);
export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <ProductContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // margin: 50
  },
});
