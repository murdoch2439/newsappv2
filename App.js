import React,{useState} from 'react';
import GlobalProvider from './src/context/Provider';
import AppNavigationContainer from './src/navigations/appNavigationContainer';
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
    <GlobalProvider>
      <AppNavigationContainer />
    </GlobalProvider>
    // </ScrollView>
    // </SafeAreaView>
  );
}