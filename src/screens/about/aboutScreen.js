import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


const AboutScreen = () =>{
  return(
    <View style={styles.container}>
      <View style={styles.textContainer}>

        <Text style={styles.title}>Qui nous sommes</Text>
        <Text style={styles.text}>Nous sommes le plus grand site d'infos en RDC.</Text>
        <Text style={styles.text}>Avec plus de 100.000 visites par jour</Text>
        <Text style={styles.text}>Plus de 312.200 fans sur facebook</Text>
        <Text style={styles.text}>Plus de 199.511 followers sur Twitter</Text>

        <Text style={styles.title}>Nous contacter</Text>
        <Text style={styles.text}>Telephone: +243 81 6661215</Text>
        <Text style={styles.text}>Mail: contact@7sur7.cd</Text>
        <View>

          <TouchableOpacity>
              <Text style={styles.text}>Equipe redactionnelle</Text>
          </TouchableOpacity>
        <View>

          <TouchableOpacity>
            <Text style={styles.text}>Rejoindre le groupe Telegram</Text>
          </TouchableOpacity>
          <FontAwesome5 name="telegram-plane" size={24} color="black" />
        </View>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#72A52F',

  },
  textContainer:{
    justifyContent:"center",
    alignItems:'center',
  },
  title:{
    fontWeight:'800',
    fontSize:20,
    color:'white',
  },
  text:{
    color:'white',
    fontSize:16
  },
})

export default AboutScreen