import React from 'react';
import {StyleSheet, Share} from 'react-native'
import { AntDesign } from '@expo/vector-icons';



const ShareButton = () =>{
    const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'https://stopchantage.com',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };



  return(
      <AntDesign name="sharealt" style={styles.share} onPress={onShare}  />
  )
}

const styles= StyleSheet.create({
  share:{
    fontSize:25,
    color:'black',
    marginRight:20,
  },
})

export default ShareButton