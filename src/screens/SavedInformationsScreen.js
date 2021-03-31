import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import HeaderWithBackButton from '../components/headerwithbackbutton'



const SavedInformationsScreen = ({navigation}) =>{
  const openDrawer = () =>{
        navigation.goBack()
    }
  return(
    <View style={styles.container}>
      <HeaderWithBackButton goBackToHome={openDrawer} />
      <Text>Saved informations Screen</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})

export default SavedInformationsScreen
