import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FormScreen from './formScreen';
import ConfirmationScreen from './confirmationScreen'

const Stack = createStackNavigator();

const ConnectionStack = () => {
  return (
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen name="Registration" component={FormScreen} options={{headerTitleAlign:'center'}} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      </Stack.Navigator>
  );
}

export default ConnectionStack;