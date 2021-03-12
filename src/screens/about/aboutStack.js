import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import AboutScreen from './aboutScreen';
import TeamScreen from './teamScreen';

const Stack = createStackNavigator();


const AboutStack = () =>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="About us" component={AboutScreen} />
      <Stack.Screen name="The team" component={TeamScreen} />
    </Stack.Navigator>
  )
}

export default AboutStack