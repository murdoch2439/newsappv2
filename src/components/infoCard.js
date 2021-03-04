import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Fontisto as one } from '@expo/vector-icons';

const InfoCard = () =>{
  const [addBookmark, setAddbookmark] = useState(false)
  
  const saveToFavorite = () =>{
    setAddbookmark(true)
  }
  const deleteToFavorite = () =>{
    setAddbookmark(false)
  }
  return(
    <View style={styles.container}>
      <View>
      <View>
       <Image source={require('../../assets/banniere.jpg')} style={styles.image} />
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Sociale</Text>
          {/* <TouchableOpacity onPress={saveToFavorite}> */}
          
          {addBookmark ? <Fontisto name="bookmark-alt" style={styles.bookMarkcolored} onPress={deleteToFavorite} /> : <Fontisto onPress={saveToFavorite}   name="bookmark" style={styles.bookMark} />   }
          {/* </TouchableOpacity> */}
          
        </View>
      </View>
        <Text style={styles.title}>Content: Here goes the info title</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    height:300,
    backgroundColor:'white',
    margin:15,
  },
  labelContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    paddingTop:10,
    // position:'absolute',
    position:'relative'
  },
  label:{
    color:'white',
    backgroundColor:'purple',
    paddingHorizontal:5,
    textAlign:'center',
    alignSelf:'center',
    borderRadius:1,
    fontWeight:'bold'
  },
  bookMark:{
    fontSize:35,
    color:'white',
    bottom:200,
    // left:235,


    //An other layout can be to set both of label and bookmark at picture top
    /* -put labelContainer:{
      position : 'absolute'
    }  
       -bookMark:{
      left: 230
       }
    
    */
  },
  bookMarkcolored:{
    fontSize:35,
    color:'purple',
    bottom:200,
  },
  image:{
    width:'100%',
    height:200,
    
  },
  title:{
    fontWeight:'600',
    margin:10,
    fontSize:16
  }
})

export default InfoCard