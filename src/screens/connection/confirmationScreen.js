import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ConfirmationScreen = () =>{
  return(
    <View style={styles.container}>
      <Text>Confirmation Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})

export default ConfirmationScreen