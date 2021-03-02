import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const NotificationsScreen = () =>{
  return(
    <View style={styles.container}>
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