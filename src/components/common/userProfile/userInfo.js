import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../../theme/colors';


const UserInfoComponent = ({title, icon, content}) =>{
  return(
    <View style={styles.container}>
      <View style={styles.iconAndInfo}>

        <View style={{ marginLeft:20}}>
          {icon && icon}
        </View>

          <Text style={styles.text}>{title} : {content}</Text>
        

      </View>
      {/* <View style={styles.separator} /> */}
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    marginVertical:10,
    // backgroundColor:'red',
    paddingHorizontal:10,
  
  },
  iconAndInfo:{
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:0.3,
    borderBottomColor:colors.black,
    paddingHorizontal:10,
  },
  text:{
    flex:1,
    color:colors.white,
    fontSize:18,
    marginLeft:40,
  },
  separator:{
    marginTop:5,
    paddingHorizontal:30,
    borderWidth:0.3,
    // width:350,
    borderColor:colors.black
  }
})

export default UserInfoComponent