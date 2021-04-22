import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native'
import {  Feather } from '@expo/vector-icons';
import ProfilePicture from '../../components/common/userProfile/profilePicture'
import colors from '../../components/theme/colors'
import UserInfoComponent from '../../components/common/userProfile/userInfo';
import HeaderWithBackButton from '../../components/headerwithbackbutton';
import logoutUser from '../../context/actions/logoutUser';
import ButtonNoBgd from '../../components/common/boutons/ButtonNobgd';



const UserProfileScreen = ({navigation, registrationDispatch}) =>{
  const goBackToHome = () =>{
        navigation.goBack()
    }

  const handleLogout = () =>{
    Alert.alert('Logout!', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },

      {
        text: 'OK',
        onPress: () => {
          logoutUser()(registrationDispatch);
        },
      },
    
    ] )
  }


  return(
    <View style={styles.container}>
      {/* <HeaderBackButton  /> */}
      <HeaderWithBackButton goBackToHome={goBackToHome} title="Profile" />
      
      {/* <Text style={styles.title}>Profile</Text> */}
        <ProfilePicture />
        <Text style={styles.text}>Votre compte vous permet de recevoir les notifications et mise a jour</Text>
      <View style={styles.contentSection}>
          
            
            <UserInfoComponent 
              title="Username" 
              content="username" 
              icon={
                <Feather name="user" style={styles.icon} />
              } 
            />
      </View>

            <UserInfoComponent 
              title="Telephone" 
              content="phone number" 
              icon={
                <Feather name="smartphone" style={styles.icon} />
              } 
            />
          

           <ButtonNoBgd onPress={handleLogout} danger title="Supprimer le compte" />
            
        {/* <TouchableOpacity style={styles.button}
          onPress={handleLogout} 
            >
            <Text style={styles.supprimer}>Supprimer le compte</Text>
          </TouchableOpacity> */}
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.grey,
  },
  title:{
    fontSize:25,
    color:colors.white,
  },
  icon:{
    color:colors.accent,
    fontSize:30,
  },
  userInfos:{
    color:colors.white,
    fontSize:18,
    paddingHorizontal:50,

  },
  button:{
    backgroundColor:colors.danger
  },
  supprimer:{
    color:colors.white,
    textAlign:'center',
    fontSize:15,
    // paddingTop:50,
  },
  text:{
    marginHorizontal:10,
    fontSize:18,
    textAlign:'center',
    paddingVertical:20,
    color:colors.accent
  }
})

export default UserProfileScreen