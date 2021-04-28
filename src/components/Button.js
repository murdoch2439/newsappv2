import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ButtonComponent = ({title, onPress}) =>{
  return(
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress} >
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  button:{
    marginLeft:20,
    backgroundColor:'#73A532', 
    height:60,
    width:320,
    borderRadius:5,
    marginTop:110,
    marginBottom:10
  },
  buttonText:{
    color:'white',
    textAlign:'center',
    fontSize:25,
    paddingTop:12,
    fontWeight:'bold',
  },
})



export default ButtonComponent