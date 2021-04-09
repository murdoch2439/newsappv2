import React, {useState} from 'react';
import {View,StyleSheet, Text, Image, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import ButtonComponent from '../../components/common/Button';
import {AntDesign} from '@expo/vector-icons'
import axios from 'axios';
import InputComponent from '../../components/common/textInput/Input';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const FormScreen = ({navigation}) =>{
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  

  const retrieveUsername = (newValue) =>{
    setName(newValue)
  }
  const retrievePhoneNumber = (newValue) =>{
    setPhoneNumber(newValue)
  }

  const goToConfirmationScreen = () =>{
    console.log({"name":name, "numero":phoneNumber});
    // axios.post('/somewhere', {name, phoneNumber})
    //   .then((res)=>{})
    //   .catch((error) =>{

    //   })
      // navigation.navigate('Confirmation')
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
          <InputComponent 
            placeholder="*Nom d'utilisateur" 
            style={styles.textInput} 
            autoCapitalize="words" 
            autoCompleteType="off"
            onChangeText={retrieveUsername}
            value={name}
            icon={<Feather name="user" size={24} color="black" />}
          />
          <InputComponent
            placeholder="*Telephone"
            style={styles.textInput}
            keyboardType="phone-pad"
            maxLength={10}
            onChangeText={retrievePhoneNumber}
            value={phoneNumber}
            icon={<MaterialCommunityIcons name="cellphone-key" size={24} color="black" />}
          />
          
          {
            phoneNumber.length < 10 ?
            <View style={styles.suggestionContainer}>
              <Text style={styles.suggestionTextGray}>Le numero doit avoir 10 characteres </Text>
              <AntDesign name="checkcircle" size={16} color="gray" />
            </View> :
            <View style={styles.suggestionContainer}>
              <Text style={styles.suggestionText}>Le numero doit avoir 10 characteres </Text>
              <AntDesign name="checkcircle" size={16} color="green" />
            </View>
          }
          {name || phoneNumber ? <Text style={{marginLeft:20, fontSize:12, paddingTop:10}}>{name}, ton numero c'est {phoneNumber}</Text>: null}
          <View style={styles.separator} />
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
  suggestionContainer:{
    flexDirection:'row',
    marginHorizontal:20,
    marginTop:20,

  },
  suggestionText:{
    color:'green',
    fontSize:12,
    fontStyle:'italic'

  },
  suggestionTextGray:{
    color:'gray',
    fontSize:12,
    fontStyle:'italic'

  },
  separator:{
    height:100
  }
})

export default FormScreen