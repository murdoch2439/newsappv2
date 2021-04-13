import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import colors from '../theme/colors';

const ButtonComponent = ({title, loading, primary, secondary, danger, disabled, onPress}) =>{
  const getBackgroundColor = () =>{
    if(disabled){
      return colors.grey
    }
    if(primary){
      return colors.primary
    }
    if(secondary){
      return colors.secondary
    }
    if(danger){
      return colors.danger
    }

  }
  return(
    <View style={styles.container}>
      <TouchableOpacity
        disabled={disabled}
        loading={loading}
        style={[styles.button,{backgroundColor: getBackgroundColor()}]} 
        onPress={onPress} >
          <View style={styles.loaderSection}>
            {loading && <ActivityIndicator  color={colors.primary} />}
            {title && 
              <Text style={[styles.buttonText, {color:disabled?"black":colors.white, paddingLeft: loading ? 5: 0}]}>{title}</Text>}
          </View>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    height:100,
    marginHorizontal:10,
    justifyContent:'center',
    alignItems:'center',
  },
  button:{
    backgroundColor:'#73A532', 
    height:60,
    width:'100%',
    borderRadius:3,
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  loaderSection:{
    flexDirection:'row'
  },
  buttonText:{
    textAlign:'center',
    fontSize:25,
    fontWeight:'700',
  },
})



export default ButtonComponent