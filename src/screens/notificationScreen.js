import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import HeaderWithBackButton from '../components/headerwithbackbutton'

const NotificationsScreen = ({navigation}) =>{
  const goBackToHome = () =>{
        navigation.goBack()
    }
  return(
    <View style={styles.container}>
      <HeaderWithBackButton goBackToHome={goBackToHome} />
      <Text>Notification Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})

export default NotificationsScreen