import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import AboutScreen from './aboutScreen';
import TeamScreen from './teamScreen';

const Stack = createStackNavigator();


const AboutStack = () =>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Qui sommes-nous?" component={AboutScreen} options={{headerTitleAlign:'center'}} />
      <Stack.Screen name="The team" component={TeamScreen} />
    </Stack.Navigator>
  )
}

export default AboutStack