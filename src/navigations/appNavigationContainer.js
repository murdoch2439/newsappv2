import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import AuthDrawerNavigation from './AuthDrawerNavigation';
import LoggedDrawerNavigation from './LoggedNavigation';
// import OnboardingScreen from '../components/onboarding/onboarding';

const AppNavigationContainer = () =>{
  const {isLogged, setIslogged} = useState
    return (
            <NavigationContainer style={styles.container}>
              <StatusBar backgroundColor="#72A52F" style="light" translucent={false} />
              {isLogged ? <LoggedDrawerNavigation />: <AuthDrawerNavigation /> }
              {/* <AuthDrawerNavigation />
              <LoggedDrawerNavigation /> */}
              {/* <OnboardingScreen /> */}
            </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppNavigationContainer