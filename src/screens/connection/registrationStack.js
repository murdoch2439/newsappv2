import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FormScreen from './formScreen';
import ConfirmationScreen from './confirmationScreen';

const Stack = createStackNavigator();

const RegistrationStack = () => {
  /*in case you want to hide the header on any screen use  headerShown and set to false */
  return (
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen name="Registration" component={FormScreen} options={{headerShown:false}} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen}  options={{headerTitleAlign:'center'}}
         />
         
      </Stack.Navigator>
  );
}

export default RegistrationStack;