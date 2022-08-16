import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CustomTab from './src/TabBar';

export default function App() {
  return (
    <NavigationContainer>
      <CustomTab bgColor="#f51929" />
    </NavigationContainer>
  );
}
