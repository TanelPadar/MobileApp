import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
 // <-- import the NavigationContainer component

import Header from './src/components/Header';
import Home from './src/components/Home';
import BottomNavigation from './src/components/BottomNavigation';
import ExerciseList from './src/components/ExerciseList';

const App = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <BottomNavigation />
      </View>
    </NavigationContainer>
  );
};


export default App;
