import React from 'react';
import {View,StyleSheet, Text, Image} from 'react-native';
const DetailsScreen = ({}) =>{
    
    return(
        <View style={styles.container}>
        <Image source={require('../../assets/banniere.jpg')} style={styles.image} />
        <Text style={styles.title}>balalala</Text>
        <Text>Here will go the whole content description of an article</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        width:'100%',
        height:200,
    },
    title:{
        fontWeight:'bold',
        marginVertical:10,
    }
})

export default DetailsScreen