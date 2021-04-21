import React from 'react';
import {View,StyleSheet,Text, TouchableOpacity, title, onPress} from 'react-native';

const ButtonNoBgd = ({navigation}) =>{

  return(
    <View style={styles.container}>
      <TouchableOpacity
          onPress={()=>{}} 
            >
            <Text style={styles.supprimer}>Add an account</Text>
          </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})

export default ButtonNoBgd
