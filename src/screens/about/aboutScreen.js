import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../components/theme/colors';
import HeaderWithBackButton from '../../components/headerwithbackbutton';


const AboutScreen = ({navigation}) =>{
  const goBackToHome = () =>{
        navigation.goBack()
    }
  return(
    <View style={styles.container}>
      <HeaderWithBackButton title="Qui nous sommes" goBackToHome={goBackToHome} />
      <View style={styles.textContainer}>

        <View style={styles.separator} />
        <Text style={styles.title}>7sur7.cd</Text>
        <View style={styles.separator} />

        <Text style={styles.text}>Nous sommes le plus grand site d'infos en RDC.</Text>
        <Text style={styles.text}>Avec plus de 100.000 visites par jour</Text>
        <Text style={styles.text}>Plus de 312.200 fans sur facebook</Text>
        <Text style={styles.text}>Plus de 199.511 followers sur Twitter</Text>
        
          <View style={styles.separator} />
        <Text style={styles.title}>Nous contacter</Text>
          <View style={styles.separator} />

        <Text style={styles.text}>Telephone: +243 81 6661215</Text>
        <Text style={styles.text}>Mail: contact@7sur7.cd</Text>
        <View>
          <View style={styles.separator} />
          <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Equipe redactionnelle</Text>
          </TouchableOpacity>
        <View style={styles.separator} />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Rejoindre le groupe  </Text>
            <FontAwesome5 name="telegram-plane" style={styles.telegram} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.white,
  },
  textContainer:{
    justifyContent:"center",
    alignItems:'center',
  },
  title:{
    fontWeight:'800',
    fontSize:22,
    color:colors.black,
  },
  text:{
    color:colors.black,
    fontSize:16
  },
  separator:{
    paddingTop:20
  },
  button:{
    borderWidth:1,
    borderColor:colors.primary,
    borderRadius: 10,
    width:300,
    flexDirection:'row',
    // backgroundColor: 'gray',
    justifyContent:'center',
    alignItems:'center',
    height:60
  },
  telegram:{
    color:colors.primary,
    fontSize:35
  }
})

export default AboutScreen