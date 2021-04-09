import React, {useState, useContext} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigation from './HomeNavigation'
import NotificationsScreen from '../screens/notificationScreen'
import RegistrationStackNavigation from './RegistrationStackNavigation'
import SavedInformationsScreen from '../screens/SavedInformationsScreen'
import AboutStackNavigation from './AboutStackNavigation'
import UserProfileScreen from '../screens/profile/profile';
import SideMenu from './SideMenu';
import { ABOUT, HOME_NAVIGATION, NOTIFICATIONS, REGISTRATION, SAVED_INFOS, USER_PROFILE } from '../constants/routeNames';
import {GlobalContext} from '../context/Provider/'
// import HeaderWithBackButton from './components/headerwithbackbutton'




// const getDrawerContent = ({navigation}) =>{
//         return(
//                 <SideMenu navigation={navigation} />
//                 )
//         }
        
const Drawer = createDrawerNavigator();

const DrawerNavigation = () =>{
        
        const {registrationState:{isLoggedIn}} = useContext(GlobalContext)


        console.log("isLoggedIn : >>", isLoggedIn);


        return(
                
        <Drawer.Navigator initialRouteName={HOME_NAVIGATION} >     
                {isLoggedIn ? <Drawer.Screen  name={USER_PROFILE} component={UserProfileScreen} /> : <Drawer.Screen  name={REGISTRATION} component={RegistrationStackNavigation} /> }
                {/* <Drawer.Screen  name="Registration" component={RegistrationStack} />
                <Drawer.Screen  name="User" component={UserProfileScreen} /> */}
                <Drawer.Screen name={HOME_NAVIGATION} component={HomeNavigation} />
                <Drawer.Screen name={NOTIFICATIONS} component={NotificationsScreen} />
                <Drawer.Screen name={SAVED_INFOS} component={SavedInformationsScreen} />
                <Drawer.Screen name={ABOUT} component={AboutStackNavigation} />
                {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} options={{ header: ({navigation})=> <HeaderWithBackButton navigation={navigation} />}}/> */}
        </Drawer.Navigator>
        )

}

export default DrawerNavigation
