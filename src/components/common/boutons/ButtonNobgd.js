import { useNavigation } from '@react-navigation/core';
import React, {useContext} from 'react';
import {View,StyleSheet,Text, TouchableOpacity} from 'react-native';
import { REGISTRATION, SIGN_UP } from '../../../constants/routeNames';
import { GlobalContext } from '../../../context/Provider';
import colors from '../../theme/colors';

const ButtonNoBgd = ({navigation, onPress, title, danger, primary}) =>{
  const {registrationState:{isLoggedIn}} = useContext(GlobalContext)

  const getBackgroundColor = () =>{
    if(primary){
      return colors.primary
    }
    if(danger){
      return colors.danger
    }
    
  }

  // const onPressHandler = ()=> {
  //   return(
  //     console.log('This is :', isLoggedIn)
  //     // navigation.navigate(SIGN_UP)
  //   )
  // }

  return(
    
      <TouchableOpacity style={[styles.container,{backgroundColor:getBackgroundColor()}]} 
          onPress={onPress} 
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
