import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ActualInfosScreen from './ActualInfos';
import PoliticalInfosScreen from './politique';
import SecurityInfosScreen from './security';
import HomeScreen from '../homeScreen';
import EconomyInfosScreen from './economy';
import SocialInfosScreen from './sociale';


const Tab = createMaterialTopTabNavigator();


const TabNavigationStack = () => {
  return (
    <Tab.Navigator  
      initialRouteName="A la une"
      tabBarOptions={{
        scrollEnabled:true,
        tabStyle: { width: 90 },
        labelStyle: { fontSize: 12 },
    
      }}>
      <Tab.Screen name="A la une" component={HomeScreen} />
      <Tab.Screen name="Politique" component={PoliticalInfosScreen} />
      <Tab.Screen name="Sécurité" component={SecurityInfosScreen} />
      <Tab.Screen name="Economy" component={EconomyInfosScreen} />
      <Tab.Screen name="Sociale" component={SocialInfosScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigationStack