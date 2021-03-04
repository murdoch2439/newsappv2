import React, {useState} from 'react';
import {View,StyleSheet, Text, Image, TextInput, TouchableOpacity} from 'react-native';

const FormScreen = ({navigation}) =>{
  const [name, setName] = useState()
  const [phoneNumber, setPhoneNumber] = useState()

  const retrieveUsername = (newValue) =>{
    setName(newValue)
  }
  const retrievePhoneNumber = (newValue) =>{
    setPhoneNumber(newValue)
  }

  const goToConfirmationScreen = () =>{
    console.log(`Tu t'appelle ${name} et voici ton numero ${phoneNumber}`);
      navigation.navigate('Confirmation')
  }
  return(
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/logo.jpg')} style={styles.image} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>Le plus grand site d'infos en RDC</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput 
          placeholder="*Nom d'utilisateur" 
          style={styles.textInput} 
          autoCapitalize="words" 
          autoCompleteType="off"
          onChangeText={retrieveUsername}
        />
        <TextInput
          placeholder="*Telephone"
          style={styles.textInput}
          keyboardType="phone-pad"
          maxLength={10}
          onChangeText={retrievePhoneNumber}
        />
        {name || phoneNumber ? <Text>{name}, ton numero c'est {phoneNumber}</Text>: null}
        <TouchableOpacity style={styles.button} onPress={goToConfirmationScreen}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
      
    </View>
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
    marginBottom:10,
    justifyContent:'center',
    flexDirection:'row',
  },
  description:{
    fontStyle:'italic',
    fontSize:16,
  },
  image:{
    height:70,
    width:70,
    borderRadius:10,
  },
  textInputContainer:{
    marginTop:30
  },
  textInput:{
    fontSize:18,
    height:50,
    marginBottom:10,
    borderBottomWidth:1,
    borderColor:'purple',
    marginHorizontal:20,
  },
  button:{
    marginLeft:20,
    backgroundColor:'#73A532', 
    height:60,
    width:320,
    borderRadius:5,
    marginTop:150,
  },
  buttonText:{
    color:'white',
    textAlign:'center',
    fontSize:25,
    paddingTop:12,
    fontWeight:'bold'
  },
})

export default FormScreen