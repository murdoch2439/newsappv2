import React from 'react';
import {View,StyleSheet, Text, Image, TextInput, TouchableOpacity} from 'react-native';

const FormScreen = ({navigation}) =>{
  const goToConfirmationScreen = () =>{
      navigation.navigate('Confirmation')
  }
  return(
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/logo.jpg')} style={styles.image} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text>Le plus grand site d'information en RDC</Text>
      </View>
        <TextInput placeholder="*Nom d'utilisateur" style={styles.textInput} />
        <TextInput placeholder="*Telephone" style={styles.textInput} />
      <TouchableOpacity style={styles.button} onPress={goToConfirmationScreen}>
        <Text style={styles.buttonText}>Registrate</Text>
      </TouchableOpacity>
      {/* <Button title="Go to confirmation"  /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:100,
    backgroundColor:'white',
  },
  imageContainer:{
    flexDirection:'row',
    justifyContent:'center'
  },
  descriptionContainer:{
    marginVertical:10,
    justifyContent:'center',
    flexDirection:'row',
  },
  image:{
    height:50,
    width:50,
    borderRadius:10,
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
    backgroundColor:'#72A52F',
    height:60,
    width:320,
    borderRadius:5,
    marginTop:190,
  },
  buttonText:{
    color:'white',
    textAlign:'center',
    fontSize:25,
    paddingTop:12,
  },
})

export default FormScreen