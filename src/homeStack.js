import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homeScreen';
import DetailsScreen from './screens/detailsScreen'

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  );
}

export default HomeStack;