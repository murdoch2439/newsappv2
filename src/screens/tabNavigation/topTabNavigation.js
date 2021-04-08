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

const TopTab = createMaterialTopTabNavigator();


const TopTabNavigation = () => {
  return (
    <TopTab.Navigator  
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
      <TopTab.Screen name="A la une" component={HomeScreen} />
      <TopTab.Screen name="Politique" component={PoliticalInfosScreen} />
      <TopTab.Screen name="Sécurité" component={SecurityInfosScreen} />
      <TopTab.Screen name="Economy" component={EconomyInfosScreen} />
      <TopTab.Screen name="Sociale" component={SocialInfosScreen} />
      <TopTab.Screen name="Sante" component={SanteInfosScreen} />
      <TopTab.Screen name="Education" component={SocialInfosScreen} />
      <TopTab.Screen name="Culture" component={CultureInfosScreen} />
      <TopTab.Screen name="Sport" component={SportInfosScreen} />
    </TopTab.Navigator>
  );
}

export default TopTabNavigation