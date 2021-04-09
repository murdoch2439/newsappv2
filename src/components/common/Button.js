import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ButtonComponent = ({title, onPress}) =>{
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress} >
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    height:100,
    marginHorizontal:10,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    backgroundColor:'#73A532', 
    height:60,
    width:'100%',
    borderRadius:3,
    justifyContent:'center'

  },
  buttonText:{
    color:'white',
    textAlign:'center',
    fontSize:29,
    fontWeight:'bold',
  },
})



export default ButtonComponent