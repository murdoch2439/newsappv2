import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homeStack'
import NotificationsScreen from './screens/notificationScreen'
import RegistrationStack from './screens/connection/registrationStack'
import SavedInformationsScreen from './screens/SavedInformationsScreen'
import AboutStack from './screens/about/aboutStack'
// import HeaderWithBackButton from './components/headerwithbackbutton'

const Drawer = createDrawerNavigator();

const DrawerNavigation = () =>{
        return(
        <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen  name="Registration" component={RegistrationStack} />
                <Drawer.Screen name="Home" component={HomeStack} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
                <Drawer.Screen name="A lire plus tard" component={SavedInformationsScreen} />
                <Drawer.Screen name="About" component={AboutStack} />
                {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} options={{ header: ({navigation})=> <HeaderWithBackButton navigation={navigation} />}}/> */}
        </Drawer.Navigator>
        )

}

export default DrawerNavigation
