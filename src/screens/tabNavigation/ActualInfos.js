import React from 'react';
import {View, StyleSheet, Text} from 'react-native';


const ActualInfosScreen = () =>{
  return(
    <View style={styles.container}>
      <Text>A la une screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})

export default ActualInfosScreen