import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {  Feather } from '@expo/vector-icons';
import ProfilePicture from '../../components/common/userProfile/profilePicture'
import colors from '../../components/theme/colors'
import UserInfoComponent from '../../components/common/userProfile/userInfo';
import HeaderWithBackButton from '../../components/headerwithbackbutton';



const UserProfileScreen = ({navigation}) =>{
  const openDrawer = () =>{
        navigation.goBack()
    }
  return(
    <View style={styles.container}>
      {/* <HeaderBackButton  /> */}
      <HeaderWithBackButton goBackToHome={openDrawer} />
      
      {/* <Text style={styles.title}>Profile</Text> */}
        <ProfilePicture />
      <View style={styles.contentSection}>
          
            
            <UserInfoComponent 
              title="Username" 
              content="KellyLordsy" 
              icon={
                < Feather name="user" style={styles.icon} />
              } 
            />
      </View>

            <UserInfoComponent 
              title="Telephone" 
              content="+243 80000000" 
              icon={
                <Feather name="smartphone" style={styles.icon} />
              } 
            />
          
            
        <TouchableOpacity 
            >
            <Text style={styles.supprimer}>Supprimer le compte</Text>
          </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.primary,
  },
  title:{
    fontSize:25,
    color:colors.white,
  },
  icon:{
    color:colors.secondary,
    fontSize:30,
  },
  userInfos:{
    color:colors.white,
    fontSize:18,
    paddingHorizontal:50,

  },
  supprimer:{
    color:colors.danger,
    textAlign:'center',
    fontSize:15,
    paddingTop:50,
  }
})

export default UserProfileScreen