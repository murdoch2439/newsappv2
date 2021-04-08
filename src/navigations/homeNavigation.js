import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../screens/detailsScreen'
import HomeHeader from '../components/homeHeader'
import TabNavigationStack from '../screens/tabNavigation/topTabNavigation';
import ShareButton from '../components/shareButton';

const HomeStack = createStackNavigator();

const HomeNavigation = () => {
  return (
      <HomeStack.Navigator initialRouteName="Home">
        <HomeStack.Screen name="Home" component={TabNavigationStack}  options={{ header: ({navigation})=> <HomeHeader navigation={navigation} />}} />
        <HomeStack.Screen name="Details" component={DetailsScreen} options={{headerRight: ()=> <ShareButton />}} />
      </HomeStack.Navigator>
  );
}



export default HomeNavigation;