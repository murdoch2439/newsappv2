import React,{useState} from 'react';
import AppNavigationContainer from './src/navigations/AppNavigationContainer';
// import LandingPageScreen from './src/screens/landingPageScreen';



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
      <AppNavigationContainer />
    // </ScrollView>
    // </SafeAreaView>
  );
}