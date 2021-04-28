import React from 'react'
import {StyleSheet,View, Text, Image} from 'react-native'

const LandingPageScreen = () =>{
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/logo.jpg')} style={styles.logoStyle} />
            <Text style={styles.textStyle}>Chargement...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
    logoStyle:{
        width:100,
        height:100,
        borderRadius:10
    },
    textStyle:{
        
        fontSize:18,
        marginTop:10,
        color:'gray',
    }
})

export default LandingPageScreen