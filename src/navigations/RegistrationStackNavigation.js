import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FormScreen from '../screens/registration/formScreen';
import ConfirmationScreen from '../screens/registration/confirmationScreen';
import { CONFIRMATION, SIGN_UP } from '../constants/routeNames';

const RegistrationStack = createStackNavigator();

const RegistrationStackNavigation = () => {
  /*in case you want to hide the header on any screen use  headerShown and set to false */
  return (
      <RegistrationStack.Navigator initialRouteName={SIGN_UP}>
        <RegistrationStack.Screen name={SIGN_UP} component={FormScreen} options={{headerShown:false}} />
        <RegistrationStack.Screen name={CONFIRMATION} component={ConfirmationScreen}  options={{headerTitleAlign:'center'}}
         />
         
      </RegistrationStack.Navigator>
  );
}

export default RegistrationStackNavigation;