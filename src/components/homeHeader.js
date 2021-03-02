import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const HomeHeader = () =>{
    return(
        <View style={styles.container}>
            <Entypo name="menu" style={styles.menu} />
            <AntDesign name="bells" style={styles.bell}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:60,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:5

    },
    menu:{
        fontSize:30,
        color:'black',
    },
    bell:{
        fontSize:25,
        color:'black',
    },
})

export default HomeHeader