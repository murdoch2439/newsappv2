import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';


const AboutScreen = () =>{
  return(
    <View style={styles.container}>
      <View>

        <Text>Qui nous sommes</Text>
        <Text>7SUR7.CD est le plus grand site d'infos en RDC.</Text>
        <Text>Avec plus de 100.000 visites par jour</Text>
        <Text>Plus de 312.200 fans sur facebook</Text>
        <Text>Plus de 199.511 followers sur Twitter</Text>

        <Text>Nous contacter</Text>
        <Text>Telephone: +243 81 6661215</Text>
        <Text>Mail: contact@7sur7.cd</Text>
        <TouchableOpacity>Equipe redactionnelle</TouchableOpacity>
      </View>

      <View>

        <TouchableOpacity>
          <Text>Rejoindre le groupe Telegram</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})

export default AboutScreen