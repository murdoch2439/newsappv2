import React, {useState, useContext, useEffect} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigation from './homeNavigation'
import NotificationsScreen from '../screens/notificationScreen'
import RegistrationStackNavigation from './RegistrationStackNavigation'
import SavedInformationsScreen from '../screens/SavedInformationsScreen'
import AboutStackNavigation from './AboutStackNavigation'
import UserProfileScreen from '../screens/profile/profile';
// import SideMenu from './SideMenu';
import { ABOUT, HOME_NAVIGATION, NOTIFICATIONS, REGISTRATION, SAVED_INFOS, USER_PROFILE } from '../constants/routeNames';
import {GlobalContext} from '../context/Provider/'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';
// import HeaderWithBackButton from './components/headerwithbackbutton'




// const getDrawerContent = ({navigation}) =>{
//         return(
//                 <SideMenu navigation={navigation} />
//                 )
//         }
        
const Drawer = createDrawerNavigator();

const DrawerNavigation = ({registrationDispatch}) =>{

        const {registrationState:{isLoggedIn}} = useContext(GlobalContext)

        const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn)
        const [authLoaded, setAuthLoaded] = useState(false)
        

        const getUser = async () =>{
                try{
                        const user =  await AsyncStorage.getItem('user')
                                if(user){
                                setAuthLoaded(true)

                                        setIsAuthenticated(true)
                                }else{
                                   setAuthLoaded(true)

                                        setIsAuthenticated(false)
                                }
                        
                }catch(error){
                        console.log(error);

                }
        }
        useEffect(()=>{
                getUser()
        }, [isLoggedIn])

        console.log("isLoggedIn : >>", isAuthenticated);


        return(
        <>

        {authLoaded ? 
        <Drawer.Navigator initialRouteName={HOME_NAVIGATION} >     
                { isAuthenticated ? <Drawer.Screen  name={USER_PROFILE} component={UserProfileScreen} registrationDispatch={registrationDispatch} /> : <Drawer.Screen  name={REGISTRATION} component={RegistrationStackNavigation} /> }
                {/* <Drawer.Screen  name="Registration" component={RegistrationStack} />
                <Drawer.Screen  name="User" component={UserProfileScreen} /> */}
                <Drawer.Screen name={HOME_NAVIGATION} component={HomeNavigation} />
                <Drawer.Screen name={NOTIFICATIONS} component={NotificationsScreen} />
                <Drawer.Screen name={SAVED_INFOS} component={SavedInformationsScreen} />
                <Drawer.Screen name={ABOUT} component={AboutStackNavigation} />
                {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} options={{ header: ({navigation})=> <HeaderWithBackButton navigation={navigation} />}}/> */}
        </Drawer.Navigator>
        : <ActivityIndicator />
        }
        </>
        )

}

export default DrawerNavigation
