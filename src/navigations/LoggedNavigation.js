import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigation from './HomeNavigation'
import NotificationsScreen from '../screens/notificationScreen'
import RegistrationStack from '../screens/connection/registrationStack'
import SavedInformationsScreen from '../screens/SavedInformationsScreen'
import AboutStack from '../screens/about/aboutStack'
import SideMenu from './SideMenu';
  import UserProfileScreen from '../screens/profile/profile';
// import HeaderWithBackButton from './components/headerwithbackbutton'




// const getDrawerContent = ({navigation}) =>{
//         return(
//                 <SideMenu navigation={navigation} />
//                 )
//         }
        
const Drawer = createDrawerNavigator();

const  LoggedDrawerNavigation = () =>{
        return(
        <Drawer.Navigator initialRouteName="Home" drawerContent={({navigation}) =>{
                 return (<SideMenu navigation={navigation} />)
        }}>
                <Drawer.Screen  name="Profile" component={UserProfileScreen} />
                <Drawer.Screen name="Home" component={HomeNavigation} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
                <Drawer.Screen name="A lire plus tard" component={SavedInformationsScreen} />
                <Drawer.Screen name="About" component={AboutStack} />
                {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} options={{ header: ({navigation})=> <HeaderWithBackButton navigation={navigation} />}}/> */}
        </Drawer.Navigator>
        )

}

export default LoggedDrawerNavigation