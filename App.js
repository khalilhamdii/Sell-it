// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from './app/components/Card';

export default function App() {
  return (
    <View
      style={{ backgroundColor: 'lightgray', padding: 20, paddingTop: 100 }}
    >
      <Card
        title=" Red Jacket for sale"
        subTitle="$100"
        image={require('./app/assets/jacket.jpg')}
      />
    </View>
  );
}
