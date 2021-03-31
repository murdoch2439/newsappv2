import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ActualInfosScreen from './ActualInfos';
import PoliticalInfosScreen from './politique';
import SecurityInfosScreen from './security';
import HomeScreen from '../homeScreen';
import EconomyInfosScreen from './economy';
import SocialInfosScreen from './sociale';
import SanteInfosScreen from './santeTab';
import CultureInfosScreen from './cultureTab';
import SportInfosScreen from './sportTab';
import { color } from 'react-native-reanimated';


const Tab = createMaterialTopTabNavigator();


const TabNavigationStack = () => {
  return (
    <Tab.Navigator  
      initialRouteName="A la une" lazy={true}
      tabBarOptions={{
        upperCaseLabel: false,
        activeTintColor:'#72A52F',
        // inactiveTintColor:'#ccd5ae',
        inactiveTintColor:'black',
        scrollEnabled:true,
        tabStyle: { width: 100 },
        labelStyle: { fontSize: 12, fontWeight:'700'},
        indicatorStyle:{backgroundColor:'#72A52F'}
        //normally tab style should have a background color of #72A52F and indicatorStyle no value
        
        
    
      }}>
      <Tab.Screen name="A la une" component={HomeScreen} />
      <Tab.Screen name="Politique" component={PoliticalInfosScreen} />
      <Tab.Screen name="Sécurité" component={SecurityInfosScreen} />
      <Tab.Screen name="Economy" component={EconomyInfosScreen} />
      <Tab.Screen name="Sociale" component={SocialInfosScreen} />
      <Tab.Screen name="Sante" component={SanteInfosScreen} />
      <Tab.Screen name="Education" component={SocialInfosScreen} />
      <Tab.Screen name="Culture" component={CultureInfosScreen} />
      <Tab.Screen name="Sport" component={SportInfosScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigationStack