import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './screens/detailsScreen'
import HomeHeader from './components/homeHeader'
import TabNavigationStack from './screens/tabNavigation/tabNavigationStack';
import ShareButton from './components/shareButton';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={TabNavigationStack}  options={{ header: ({navigation})=> <HomeHeader navigation={navigation} />}} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerRight: ()=> <ShareButton />}} />
      </Stack.Navigator>
  );
}



export default HomeStack;