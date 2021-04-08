import React from 'react'
import {View,StyleSheet, TextInput} from 'react-native';

const InputComponent = ({placeholder, autoCapitalize, autoCompleteType, onChangeText}) =>{
  return(
    <View>
      <TextInput 
          placeholder={placeholder} 
          style={styles.textInput} 
          autoCapitalize={autoCapitalize} 
          autoCompleteType={autoCompleteType}
          onChangeText={onChangeText}
        />
    </View>
  )

}

export default InputComponent