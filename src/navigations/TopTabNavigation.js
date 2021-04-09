import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ActualInfosScreen from '../screens/tabNavigation/ActualInfos';
import PoliticalInfosScreen from '../screens/tabNavigation/politique';
import SecurityInfosScreen from '../screens/tabNavigation/security';
import HomeScreen from '../screens/homeScreen';
import EconomyInfosScreen from '../screens/tabNavigation/economy';
import SocialInfosScreen from '../screens/tabNavigation/sociale';
import SanteInfosScreen from '../screens/tabNavigation/santeTab';
import CultureInfosScreen from '../screens/tabNavigation/cultureTab';
import SportInfosScreen from '../screens/tabNavigation/sportTab';
import { A_LA_UNE, CULTURE, ECONOMIE, EDUCATION, POLITIQUE, SANTE, SECURITE, SOCIETE, SPORT } from '../constants/routeNames';

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
      <TopTab.Screen name={A_LA_UNE} component={HomeScreen} />
      <TopTab.Screen name={POLITIQUE} component={PoliticalInfosScreen} />
      <TopTab.Screen name={SECURITE} component={SecurityInfosScreen} />
      <TopTab.Screen name={ECONOMIE} component={EconomyInfosScreen} />
      <TopTab.Screen name={SOCIETE} component={SocialInfosScreen} />
      <TopTab.Screen name={SANTE} component={SanteInfosScreen} />
      <TopTab.Screen name={EDUCATION} component={SocialInfosScreen} />
      <TopTab.Screen name={CULTURE} component={CultureInfosScreen} />
      <TopTab.Screen name={SPORT} component={SportInfosScreen} />
    </TopTab.Navigator>
  );
}

export default TopTabNavigation