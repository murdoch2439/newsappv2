import { useNavigation } from '@react-navigation/core';
import React, {useContext} from 'react';
import {View,StyleSheet,Text, Image} from 'react-native';
import ButtonNoBgd from '../components/common/boutons/ButtonNobgd';
import HeaderWithBackButton from '../components/headerwithbackbutton'
import colors from '../components/theme/colors';
import { REGISTRATION, SIGN_UP } from '../constants/routeNames';
import { GlobalContext } from '../context/Provider';
import { navigate } from '../navigations/RootNavigator';

const NotificationsScreen = ({navigation}) =>{
  // const {navigation} = useNavigation()
  const {registrationState:{isLoggedIn}} = useContext(GlobalContext)

  const goBackToHome = () =>{
        navigation.goBack()
    }

  const onPressHandler = () =>{
    
      navigate(SIGN_UP)
      // navigation.navigate(REGISTRATION)
    
  }
  return(
    <View style={styles.container}>
      <HeaderWithBackButton goBackToHome={goBackToHome} />
      
      {/* <Text>Notification Screen</Text> */}
      {/* {console.log('This is :', isLoggedIn)} */}
      {
        isLoggedIn ?
        <Text>There's nothing yet for you!</Text>:
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
    backgroundColor:colors.grey
  },
  mainSection:{
    // padding:10,
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
  
})

export default NotificationsScreen