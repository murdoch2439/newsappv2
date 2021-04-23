import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { Feather as anotherIcon } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import colors from './theme/colors';
const HomeHeader = ({navigation}) =>{
    const openMenu = () =>{
        navigation.openDrawer()
    }

    const openNotificationsScreen = () =>{
        navigation.navigate('Notifications')
    }
    return(
        <View style={styles.container}>
            <Feather name="menu" style={styles.menu} onPress={openMenu} />
            <Image source={require('../../assets/logo.jpg')} style={styles.image} />
            <Feather name="bell" style={styles.bell} onPress={openNotificationsScreen}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:60,
        backgroundColor:colors.primary,
        // backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:15
    },
    menu:{
        fontSize:30,
        color:colors.white,
        // color:'black'
    },
    bell:{
        fontSize:25,
        color:colors.white,
        // color:'black'
    },
    image:{
        width:50,
        height:50,
        borderRadius:100,
    },
})

export default HomeHeader