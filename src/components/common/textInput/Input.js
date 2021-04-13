import React, {useState} from 'react'
import {View,StyleSheet, TextInput, Text} from 'react-native';
import colors from '../../theme/colors';

const InputComponent = ({
  placeholder, 
  autoCapitalize, 
  autoCompleteType, 
  onChangeText, 
  value, 
  label, 
  maxLength, 
  keyboardType, 
  icon,
  ...props}) =>{
  const [focused, setFocused] = useState(false)

  const getBorderColor = () =>{
    if(focused){
      return colors.primary
    }else{
      return colors.grey
    }
  }


  return(
    <View style={styles.Container}>
      {label && <Text>{label}</Text>}
      <View>
        <View style={[styles.textInputContainer, {borderColor:getBorderColor()}]}>
          <TextInput 
            placeholder={placeholder} 
            style={styles.textInput} 
            autoCapitalize={autoCapitalize} 
            autoCompleteType={autoCompleteType}
            onChangeText={onChangeText}
            value={value}
            keyboardType={keyboardType}
            maxLength={maxLength}
            onFocus={() =>{setFocused(true)}}
            onBlur={() =>{setFocused(false)}}
            // {...props}
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
  Container:{
    marginTop:30,
    marginHorizontal:20,
    // paddingHorizontal:10,
    // backgroundColor:'red',
    // justifyContent:'center'
  },
  textInputContainer:{
    flexDirection:'row', 
    borderBottomWidth:1,
  },
  textInput:{
    flex:1,
    fontSize:18,
    height:50,
    paddingHorizontal:5,
  },
  icon:{
    justifyContent:'center',    
  }
})

export default InputComponent