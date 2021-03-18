import React, {useState} from 'react';
import {View,StyleSheet, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import ButtonComponent from '../../components/Button';
import {AntDesign} from '@expo/vector-icons'

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
        />
        <TextInput
          placeholder="*Telephone"
          style={styles.textInput}
          keyboardType="phone-pad"
          maxLength={10}
          onChangeText={retrievePhoneNumber}
        />
        {phoneNumber.length < 10 ?
        <View style={{flexDirection:'row'}}>
          <Text style={{color:'gray',marginLeft:20, fontSize:12}}>Le numero doit avoir 10 characteres </Text>
          <AntDesign name="checkcircle" size={16} color="gray" />
        </View>  :<View style={{flexDirection:'row'}}>
          <Text style={{color:'green',marginLeft:20, fontSize:12}}>Le numero doit avoir 10 characteres </Text>
          <AntDesign name="checkcircle" size={16} color="green" />
        </View>}
        {name || phoneNumber ? <Text>{name}, ton numero c'est {phoneNumber}</Text>: null}
        <ButtonComponent title="S'inscrire" onPress={goToConfirmationScreen} />
        
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
    fontWeight:'bold'
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
    borderColor:'purple',
    marginHorizontal:20,
  },
  
})

export default FormScreen