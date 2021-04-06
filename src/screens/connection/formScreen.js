import React, {useState} from 'react';
import {View,StyleSheet, Text, Image, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import ButtonComponent from '../../components/Button';
import {AntDesign} from '@expo/vector-icons'
import axios from 'axios';

const FormScreen = ({navigation}) =>{
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const retrieveUsername = (newValue) =>{
    setName(newValue)
  }
  const retrievePhoneNumber = (newValue) =>{
    setPhoneNumber(newValue)
  }

  const goToConfirmationScreen = ({name, phoneNumber}) =>{
    // console.log(`Tu t'appelle ${name} et voici ton numero ${phoneNumber}`);
    // axios.post('/somewhere', {name, phoneNumber})
    //   .then((res)=>{})
    //   .catch((error) =>{

    //   })
      navigation.navigate('Confirmation')
  }

  const dismissKeyboard = () =>{
    Keyboard.dismiss()
  }
  return(
    <TouchableWithoutFeedback  onPress={dismissKeyboard}>
      <View style={styles.container} >
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.imageContainer}>
          <Image source={require('../../../assets/logo.jpg')} style={styles.image} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Le plus grand site d'infos en
            <Text style={styles.rdc}> RDC</Text>
          </Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput 
            placeholder="*Nom d'utilisateur" 
            style={styles.textInput} 
            autoCapitalize="words" 
            autoCompleteType="off"
            onChangeText={retrieveUsername}
            value={name}
          />
          <TextInput
            placeholder="*Telephone"
            style={styles.textInput}
            keyboardType="phone-pad"
            maxLength={10}
            onChangeText={retrievePhoneNumber}
            value={phoneNumber}
          />
          
          {
            phoneNumber.length < 10 ?
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'gray',marginLeft:20, fontSize:12}}>Le numero doit avoir 10 characteres </Text>
              <AntDesign name="checkcircle" size={16} color="gray" />
            </View> :
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'green',marginLeft:20, fontSize:12}}>Le numero doit avoir 10 characteres </Text>
              <AntDesign name="checkcircle" size={16} color="green" />
            </View>
          }
          {name || phoneNumber ? <Text style={{marginLeft:20, fontSize:12, paddingTop:10}}>{name}, ton numero c'est {phoneNumber}</Text>: null}
          <ButtonComponent title="S'inscrire" onPress={goToConfirmationScreen} />
          
        </View>
        
      </ScrollView>
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
    marginBottom:10,
    justifyContent:'center',
    flexDirection:'row',
  },
  description:{
    fontStyle:'italic',
    fontSize:16,
    // fontWeight:'bold'
  },
  rdc:{
    color:'#72A52F',
    fontStyle:'italic',
    fontSize:16,
    fontWeight:'bold'
    
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
    borderColor:'#72A52F',
    marginHorizontal:20,
    paddingHorizontal:5,
  },
  
})

export default FormScreen