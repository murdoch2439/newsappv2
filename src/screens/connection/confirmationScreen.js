import React from 'react';
import {View, StyleSheet, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import ButtonComponent from '../../components/Button';

const ConfirmationScreen = () =>{

  const goToConfirmationScreen = () =>{
      navigation.navigate('Confirmation')
  }
  const dismissKeyboard = () =>{
    Keyboard.dismiss()
  }


  return(
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../../../assets/logo.jpg')} style={styles.image} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>Entrer le code de confirmation</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="------" 
            style={styles.textInput} 
            keyboardType="numeric" 
            maxLength={6}
          />
          <TouchableOpacity 
            >
            <Text style={styles.resendCode}>Renvoyer le code</Text>
          </TouchableOpacity>
          <ButtonComponent title="Valider" />
        </View>
        
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:30,
    backgroundColor:'white',
  },
  imageContainer:{
    flexDirection:'row',
    justifyContent:'center'
  },
  descriptionContainer:{
    marginTop:60,
    justifyContent:'center',
    flexDirection:'row',
  },
  description:{
    fontStyle:'italic',
    fontSize:16,
    fontWeight:'600'
  },
  image:{
    height:70,
    width:70,
    borderRadius:10,
  },
  textInputContainer:{
    marginTop:60
  },
  textInput:{
    fontSize:29,
    height:50,
    marginBottom:10,
    borderBottomWidth:1,
    borderColor:'purple',
    marginHorizontal:20,
    textAlign:'center'
  },
   resendCode:{
    color:'blue',
    textAlign:'center',
    fontSize:15,
    paddingTop:5,
    
  },
})

export default ConfirmationScreen