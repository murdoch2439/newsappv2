import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../screens/detailsScreen'
import HomeHeader from '../components/homeHeader'
import TabNavigationStack from './TopTabNavigation';
import ShareButton from '../components/shareButton';
import { INFOS_DETAILS, TOP_TAB_NAVIGATION } from '../constants/routeNames';

const HomeStack = createStackNavigator();

const HomeNavigation = () => {
  return (
      <HomeStack.Navigator initialRouteName={TOP_TAB_NAVIGATION}>
        <HomeStack.Screen name={TOP_TAB_NAVIGATION} component={TabNavigationStack}  options={{ header: ({navigation})=> <HomeHeader navigation={navigation} />}} />
        <HomeStack.Screen name={INFOS_DETAILS} component={DetailsScreen} options={{headerRight: ()=> <ShareButton />}} />
      </HomeStack.Navigator>
  );
}



export default HomeNavigation;