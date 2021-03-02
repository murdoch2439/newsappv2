import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homeScreen';
import DetailsScreen from './screens/detailsScreen'
import HomeHeader from './components/homeHeader'

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}  options={{ header: ({navigation})=> <HomeHeader navigation={navigation} />}} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  );
}

export default HomeStack;