import React from 'react';
import {View, StyleSheet, Image} from 'react-native';


const ProfilePicture = () =>{
  return(
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../../../assets/banniere.jpg')} />
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    marginVertical:15,
    // backgroundColor:'red',
    alignItems:'center',
  },
  image:{
    height:120,
    width:120,
    borderRadius:100
  },
})

export default ProfilePicture