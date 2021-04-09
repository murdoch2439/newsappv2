import React from 'react'
import {View,StyleSheet, TextInput, Text} from 'react-native';

const InputComponent = ({placeholder, autoCapitalize, autoCompleteType, onChangeText, value, label, maxLength, keyboardType, icon, iconPosition}) =>{
  return(
    <View style={styles.textInputContainer}>
      {/* {label && <Text>{label}</Text>} */}
      <View>
        <View style={{ flexDirection:'row'}}>
          <TextInput 
          placeholder={placeholder} 
          style={styles.textInput} 
          autoCapitalize={autoCapitalize} 
          autoCompleteType={autoCompleteType}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
          maxLength={maxLength}
          />
          
          <View style={styles.icon}>

          {icon &&  icon}
          </View>

        </View>
      </View>
      
    </View>
  )

}

const styles = StyleSheet.create({
  textInputContainer:{
    marginTop:30,
    marginHorizontal:20,
    // paddingHorizontal:10,
    // backgroundColor:'yellow',
    // justifyContent:'center'
  },
  textInput:{
    // backgroundColor:'red',
    fontSize:18,
    height:50,
    // marginBottom:10,
    borderBottomWidth:1,
    borderColor:'#72A52F',
    
    paddingHorizontal:5,
    flex:1,
  },
  icon:{
    justifyContent:'center',
    borderBottomWidth:1,
    borderColor:'#72A52F',
    // backgroundColor:'red'
  }
})

export default InputComponent