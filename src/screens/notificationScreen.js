import { useNavigation } from '@react-navigation/core';
import React, {useContext} from 'react';
import {View,StyleSheet,Text, Image} from 'react-native';
import ButtonNoBgd from '../components/common/boutons/ButtonNobgd';
import HeaderWithBackButton from '../components/headerwithbackbutton'
import colors from '../components/theme/colors';
import { REGISTRATION } from '../constants/routeNames';
import { GlobalContext } from '../context/Provider';
import { navigate } from '../navigations/RootNavigator';

const NotificationsScreen = ({navigation}) =>{
  const {registrationState:{isLoggedIn}} = useContext(GlobalContext)

  const goBackToHome = () =>{
        navigation.goBack()
  }

  const onPressHandler = () =>{
      navigate(REGISTRATION)
  }


  return(
    <View style={styles.container}>
      <HeaderWithBackButton goBackToHome={goBackToHome} title="Notifications" />

      {
        isLoggedIn ?
        <View style={styles.notification}>

          <Text style={styles.notificationText}>We have nothing for you yet!</Text>
        </View>:
        <View style={styles.mainSection}>
          <Image style={styles.image} source={require('../../assets/notification.png')} />
          <Text style={styles.text}>You need to be logged in for receiving notifications</Text>
           <ButtonNoBgd primary onPress ={onPressHandler} title="Get registrated" />
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.grey,
  },
  mainSection:{
    marginTop:'10%',    
  },
  image:{
    height:320,
    width:'100%',
    alignSelf:'center',
    marginTop:10,
  },
  text:{
    fontSize:15,
    paddingTop:5,
    textAlign:'center'
  },
  notification:{
    flex:1,
    justifyContent:'center',
  },
  notificationText:{
    fontSize:20,
    color:colors.accent,
    textAlign:'center',
  }
  
})

export default NotificationsScreen