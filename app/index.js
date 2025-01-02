import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import ShoppingCart from '../components/ShoppingCart';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#4CAF50" />
      <ShoppingCart />
    </SafeAreaView>
  );
}