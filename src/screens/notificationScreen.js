import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import HeaderWithBackButton from '../components/headerwithbackbutton'

const NotificationsScreen = ({navigation}) =>{
  return(
    <View style={styles.container}>
      <HeaderWithBackButton />
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