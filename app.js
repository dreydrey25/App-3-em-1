import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/HomePage';
import AgeCalculatorPage from './components/AgeCalculatorPage';
import TriangleAreaPage from './components/TriangleAreaPage';
import SquareAreaPage from './components/SquareAreaPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Home' }} />
        <Stack.Screen name="AgeCalculator" component={AgeCalculatorPage} options={{ title: 'Age Calculator' }} />
        <Stack.Screen name="TriangleArea" component={TriangleAreaPage} options={{ title: 'Triangle Area Calculator' }} />
        <Stack.Screen name="SquareArea" component={SquareAreaPage} options={{ title: 'Square Area Calculator' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;