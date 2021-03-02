import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homeStack'
import NotificationsScreen from './screens/notificationScreen'

const Drawer = createDrawerNavigator();

const DrawerNavigation = () =>{
        return(
        <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeStack} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
        )

}

export default DrawerNavigation
