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
          <Text style={styles.date}>mar 05/03/2021 - 15:28</Text>
          
        </View>
      </View>
        <Text style={styles.title} numberOfLines={4}>RDC: Here goes the info title that describe well the article, this should fit on 3 lines only bka jdhdb herhru hffjk hjfhfjjr jfjjf jdkddj jdjdkjdn jdjdkjd kjghfg j dkj djdkkd jdkkd dkkd jkkdkd djjd</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    height:300,
    backgroundColor:'white',
    margin:15,
    borderRadius:5,
  },
  labelContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    paddingTop:10,
    // position:'absolute',
    
  },
  label:{
    color:'white',
    backgroundColor:'#72A52F',
    paddingHorizontal:5,
    borderRadius:2,
    fontWeight:'700',
    marginBottom:15,
    // bottom:180,
    right:5
    
    // bottom:10,
    // right:5
  },
  bookMark:{
    fontSize:35,
    color:'white',
    bottom:180,
    left:180,
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
    color:'#72A52F',
    bottom:190,
    left:180,
  },
  date:{
    fontStyle:'italic',
    fontSize:12,
  },
  image:{
    width:'100%',
    height:180,
    borderTopRightRadius:5,
    borderTopLeftRadius:5,
    
  },
  title:{
    fontWeight:'600',
    marginHorizontal:5,
    marginTop:-10,
    fontSize:15,
    textAlign:'justify',
    // overflow:'hidden'
  }
})

export default InfoCard