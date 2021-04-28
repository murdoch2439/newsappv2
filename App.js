import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/drawerNavigation';
import LandingPageScreen from './src/screens/landingPageScreen';
import OnboardingScreen from './src/components/onboarding/onboarding';

export default function App() {
  // const [loading, isLoading] = useState(true)
  // React.useEffect(()=>{
  //   setTimeout(()=>{isLoading(false) },2000)
  // },[]
  // )
  // if(loading)
  // return <LandingPageScreen/>
  return (
    // <SafeAreaView>

    // <ScrollView>
      <NavigationContainer style={styles.container}>
        <StatusBar backgroundColor="#72A52F" style="light" translucent={false} />
        <DrawerNavigation />
        {/* <OnboardingScreen /> */}
      </NavigationContainer>
    // </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
