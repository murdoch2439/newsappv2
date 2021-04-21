import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View,StyleSheet,Text, TouchableOpacity} from 'react-native';
import { REGISTRATION, SIGN_UP } from '../../../constants/routeNames';
import colors from '../../theme/colors';

const ButtonNoBgd = ({navigation, title}) =>{
  const {navigate} = useNavigation

  const onPressHandler = ()=> {
    return(

      navigation.navigate(SIGN_UP)
    )
  }

  return(
    
      <TouchableOpacity style={styles.container}
          onPress={onPressHandler} 
            >
            <Text style={styles.buttonText}>{title}</Text>
          </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.primary,
    marginTop:15,
    padding:15,
    marginHorizontal:80,
    borderRadius:5
  },
  buttonText:{
    color:colors.white,
    textAlign:'center',
    fontSize:15,    
  }
})

export default ButtonNoBgd
