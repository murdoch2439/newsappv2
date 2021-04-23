import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { HeaderBackButton } from '@react-navigation/stack';
import colors from './theme/colors';

const HeaderWithBackButton = ({goBackToHome, title}) =>{

  
    
    return(
        <View style={styles.container}>
            {/* <MaterialCommunityIcons name="keyboard-backspace" style={styles.backButton} onPress={goBackToHome} /> */}
            <HeaderBackButton style={styles.backButton} onPress={goBackToHome} />
            
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:60,
        backgroundColor:colors.white,
        alignItems:'center',
    },
    backButton:{
        fontSize:30,
        color:colors.black,
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:colors.black,
        paddingLeft:20,

    }
})

export default HeaderWithBackButton