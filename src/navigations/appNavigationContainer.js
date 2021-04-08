import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import DrawerNavigation from './drawerNavigation';
// import OnboardingScreen from '../components/onboarding/onboarding';

const AppNavigationContainer = () =>{
    return (
            <NavigationContainer style={styles.container}>
              <StatusBar backgroundColor="#72A52F" style="light" translucent={false} />
              <DrawerNavigation />
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