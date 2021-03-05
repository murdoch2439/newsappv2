import React from 'react';
import {StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './screens/detailsScreen'
import HomeHeader from './components/homeHeader'
import { AntDesign } from '@expo/vector-icons';
import TabNavigationStack from './screens/tabNavigation/tabNavigationStack';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={TabNavigationStack}  options={{ header: ({navigation})=> <HomeHeader navigation={navigation} />}} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerRight: ()=> <AntDesign name="sharealt" style={styles.share} onPress={()=> alert('Hello do you have something to share!')} />}} />
      </Stack.Navigator>
  );
}

const styles= StyleSheet.create({
  share:{
    fontSize:25,
    color:'black',
    marginRight:20,
  },
})

export default HomeStack;