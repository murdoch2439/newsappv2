import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FormScreen from '../screens/registration/formScreen';
import ConfirmationScreen from '../screens/registration/confirmationScreen';
import { CONFIRMATION, SIGN_UP, USER_PROFILE } from '../constants/routeNames';
import UserProfileScreen from '../screens/profile/profile';

const RegistrationStack = createStackNavigator();

const RegistrationStackNavigation = () => {
  /*in case you want to hide the header on any screen use  headerShown and set to false */
  return (
      <RegistrationStack.Navigator initialRouteName={SIGN_UP}>
        <RegistrationStack.Screen name={SIGN_UP} component={FormScreen} options={{headerShown:false}} />
        <RegistrationStack.Screen name={USER_PROFILE} component={UserProfileScreen}  options={{headerShown:false}}
         />
         
      </RegistrationStack.Navigator>
  );
}

export default RegistrationStackNavigation;