import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import AboutScreen from '../screens/about/aboutScreen';
import TeamScreen from '../screens/about/teamScreen';
import { A_PROPOS_DE_NOUS, LA_TEAM } from '../constants/routeNames';

const AboutStack = createStackNavigator();


const AboutStackNavigation = () =>{
  return(
    <AboutStack.Navigator>
      <AboutStack.Screen name={A_PROPOS_DE_NOUS} component={AboutScreen} options={{headerTitleAlign:'center'}} />
      <AboutStack.Screen name={LA_TEAM} component={TeamScreen} />
    </AboutStack.Navigator>
  )
}

export default AboutStackNavigation