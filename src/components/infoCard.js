import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableWithoutFeedback} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import colors from './theme/colors';
import categories from './common/data/categories';

const InfoCard = ({item, onPressHandler}) =>{
  const {field_image, field_categorie, created, title} = item
  const [addBookmark, setAddbookmark] = useState(false)
  
  const saveToFavorite = () =>{
    setAddbookmark(true)
  }
  const deleteToFavorite = () =>{
    setAddbookmark(false)
  }

  const theDate = new Date( Date.parse('2021-04-22T16:22:56+0100'));
  return(
      <TouchableWithoutFeedback onPress={onPressHandler}>
        <View style={styles.container} >

          <View style={styles.imageContainer}>
            {field_image ?<Image source={{uri:`https://7sur7.cd${field_image}`}} style={styles.image} />:<Image source={require('../../assets/noImage.png')} style={styles.noImage} />}
          </View>

          <View style={styles.bookMarkContainer}>
            {addBookmark ? <Fontisto name="bookmark-alt" style={styles.bookMarkcolored} onPress={deleteToFavorite} /> : <Fontisto onPress={saveToFavorite}   name="bookmark" style={styles.bookMark} />   }
          </View>

          <View style={styles.labelAndDateContainer}>
            {field_categorie.length === 1 ? 
              <Text style={styles.label}>{categories[field_categorie]}</Text> : <Text style={styles.label}>{categories[field_categorie]}</Text>
            }
             
            <Text style={styles.date}>{created}</Text>
          </View>
          
          <Text style={styles.title} numberOfLines={4}>{title}</Text>
      </View>
   </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container:{
    height:310,
    backgroundColor:colors.white,
    margin:15,
    borderRadius:5,
    // marginTop:60,
  },
  imageContainer:{
    backgroundColor:colors.accent,
    width:'100%',
    alignItems:'center',
    borderTopRightRadius:5,
    borderTopLeftRadius:5,
  },
  image:{
    width:'100%',
    height:180,
    borderTopRightRadius:5,
    borderTopLeftRadius:5,
    opacity:0.8,
    backgroundColor:colors.accent
  },
  noImage:{
    width:200, 
    height:200, 
    backgroundColor:colors.accent
  },
  bookMarkContainer:{
    // backgroundColor:'pink',
    position:'absolute',
    right:10,
    top:10,
    
  },
  bookMark:{
    fontSize:35,
    color:colors.white,
    backgroundColor:'transparent',
    
    
    // bottom:180,
    // left:170,
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
    color:colors.white,
  },
  labelAndDateContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:10,
    paddingHorizontal:5,
  },
  label:{
    color:colors.white,
    backgroundColor:colors.primary,
    paddingHorizontal:5,
    borderRadius:2,
    fontWeight:'700',
    marginBottom:15,
  },
  date:{
    fontStyle:'italic',
    fontSize:12,
    alignItems:'center'
  },
  title:{
    fontWeight:'bold',
    marginHorizontal:5,
    fontSize:15,
    textAlign:'justify',
    color:colors.black
  }
})

export default InfoCard