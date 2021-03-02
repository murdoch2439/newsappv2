import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/homeStack'
import LandingPageScreen from './src/screens/landingPageScreen';

export default function App() {
  // const [loading, isLoading] = useState(true)
  // React.useEffect(()=>{
  //   setTimeout(()=>{isLoading(false) },2000)
  // },[]
  // )
  // if(loading)
  // return <LandingPageScreen/>

  return (
    <NavigationContainer style={styles.container}>
      <StatusBar backgroundColor="#72A52F" style="light" translucent={false} />
      <HomeStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
