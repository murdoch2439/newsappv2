import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { HeaderBackButton } from '@react-navigation/stack';

const HeaderWithBackButton = ({goBackToHome}) =>{

  
    
    return(
        <View style={styles.container}>
            {/* <MaterialCommunityIcons name="keyboard-backspace" style={styles.backButton} onPress={goBackToHome} /> */}
            <HeaderBackButton style={styles.backButton} onPress={goBackToHome} />
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
        paddingHorizontal:15
    },
    backButton:{
        fontSize:30,
        color:'black',
    },
})

export default HeaderWithBackButton