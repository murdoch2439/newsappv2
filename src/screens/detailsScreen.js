import React from 'react';
import {View,StyleSheet, Text} from 'react-native';
const DetailsScreen = () =>{
    return(<View style={styles.container}>
        <Text> Good day this is Details screen</Text>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})

export default DetailsScreen