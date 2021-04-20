import React from 'react';
import {View,StyleSheet,Text, TouchableOpacity} from 'react-native';
import HeaderWithBackButton from '../components/headerwithbackbutton'

const NotificationScreenDisabled = ({navigation}) =>{
  const goBackToHome = () =>{
        navigation.goBack()
    }
  return(
    <View style={styles.container}>
      <HeaderWithBackButton goBackToHome={goBackToHome} />
      <Text>Sorry, you need to have an account to receive notification</Text>
      <TouchableOpacity
          onPress={handleLogout} 
            >
            <Text style={styles.supprimer}>Add an account</Text>
          </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})

export default NotificationScreenDisabled