import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,} from 'react-native';
import colors from '../../theme/colors';

const MessageComponent = ({message, onDismiss, retry, retryFn, primary, info, success, danger, }) =>{

  const [userDismissed, setDismissed] = useState(false)
  const getBackgroundColor = () =>{
    
    if(primary){
      return colors.primary
    }
    if(info){
      return colors.secondary
    }
    if(danger){
      return colors.danger
    }
    if(success){
      return colors.success
    }

  }
  return(
    <>
      {userDismissed? null:
      <TouchableOpacity style={[styles.button,{backgroundColor: getBackgroundColor()}]} 
         >
          <View style={styles.container}>
            
             
              <Text style={[ { color:colors.white}]}>{message}</Text>

              {retry && !typeof onDismiss === "function" &&
                <TouchableOpacity onPress={retryFn}>
                  <Text style={{color:colors.white}}>Retry</Text>
                </TouchableOpacity> 
              }

              {typeof onDismiss === "function" &&
              <TouchableOpacity onPress={()=>{
                setDismissed(true)
                 onDismiss()
              }}>
                  <Text style={{color:colors.white}}>X</Text>
              </TouchableOpacity> }
          </View>
      </TouchableOpacity>
      }

      </>
    
  )
}
const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:10
  },
  button:{
    margin:10,
    height:60,
    borderRadius:3,
    justifyContent:'space-evenly',
  },
  buttonText:{
    textAlign:'center',
    fontSize:25,
    fontWeight:'700',
  },
})



export default MessageComponent