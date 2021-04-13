import React, {useState, useEffect} from 'react';
import {View,StyleSheet, Text, Image, TouchableWithoutFeedback, Keyboard, ScrollView, } from 'react-native';
import ButtonComponent from '../../components/common/Button';
import {AntDesign} from '@expo/vector-icons'
// import axios from 'axios';
import InputComponent from '../../components/common/textInput/Input';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axiosInstance from '../../api/key';



const FormScreen = ({navigation}) =>{
  const [userName, setUserName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  

  const retrieveUserName = (newValue) =>{
    setUserName(newValue)
  }
  const retrievePhoneNumber = (newValue) =>{
    setPhoneNumber(newValue)
  }

  const onSubmit = () =>{
    console.log({"name":userName, "number":phoneNumber});
    // axios.post('/somewhere', {name, phoneNumber})
    //   .then((res)=>{})
    //   .catch((error) =>{

    //   })
      // navigation.navigate('Confirmation')
  }

  const dismissKeyboard = () =>{
    Keyboard.dismiss()
  }

  //This was not working as expected

// const [form, setForm] = useState({})
//   const [errors, setErrors] = useState({})

//   const onChange = ({name, value}) =>{
//     setForm({...form, [name]:value})
//   }

//   const onSubmit = () =>{

//   console.log("form: >>", form);

//   }


  // useEffect(()=>{
  //   axiosInstance.post('/contacts').catch((error)=>{
  //     console.log(error);
  //   })
  // }, [])


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
            {/* <Text style={{textAlign:'center', paddingTop:20, fontSize:20}}>Pour ne plus manquer l'actualité</Text> */}
            <InputComponent 
              placeholder="*Nom d'utilisateur" 
              style={styles.textInput} 
              autoCapitalize="words" 
              autoCompleteType="off"
              onChangeText={retrieveUserName}
              value={userName}
              // onChangeText={(value) =>{
              //   onChange({name:"userName", value})
              // }}
              // value={form}
              
              // error={errors.firstName}
              icon={<Feather name="user" size={24} color="black" />}
            />
            <InputComponent
              placeholder="*Telephone"
              style={styles.textInput}
              keyboardType="phone-pad"
              maxLength={10}
              onChangeText={retrievePhoneNumber}
              value={phoneNumber}
              // onChangeText={(value)=>{
              //   onChange({name:"phoneNumber", value})
              // }}
              // value={form}
              icon={<MaterialCommunityIcons name="cellphone-key" size={24} color="black" />}
            />
          
            {
              phoneNumber.length < 10 ?
              <View style={styles.suggestionContainer}>
                <Text style={styles.suggestionTextGray}>Le numero doit avoir 10 characteres </Text>
                <AntDesign name="checkcircle" size={16} color="gray" />
              </View> :
              <View style={styles.suggestionContainer}>
                <Text style={styles.suggestionTextGreen}>Le numero doit avoir 10 characteres </Text>
                <AntDesign name="checkcircle" size={16} color="green" />
              </View>
            } 
            {userName || phoneNumber ? <Text style={{marginLeft:20, fontSize:12, paddingTop:10}}>{userName}, ton numero c'est {phoneNumber}</Text>: null}
            <View style={styles.separator} />
              <ButtonComponent title="S'inscrire" loading={false} disabled={false} onPress={onSubmit} primary />
              
              {/* <ButtonComponent title="Click me" loading={true} disabled={true} onPress={goToConfirmationScreen} primary /> */}
            
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
    justifyContent:'center',
  },
  image:{
    height:70,
    width:70,
    borderRadius:10,
  },
  descriptionContainer:{
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
  textInputContainer:{
    // backgroundColor:'red'
  },
  suggestionContainer:{
    flexDirection:'row',
    marginHorizontal:20,
    marginTop:20,

  },
  suggestionTextGreen:{
    color:'green',
    fontSize:12,
    fontStyle:'italic',
    paddingRight:5,

  },
  suggestionTextGray:{
    color:'gray',
    fontSize:12,
    fontStyle:'italic',
    paddingRight:5,

  },
  separator:{
    height:100
  }
})

export default FormScreen