import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Fontisto as one } from '@expo/vector-icons';

const InfoCard = ({item, navigation}) =>{
  const [addBookmark, setAddbookmark] = useState(false)
  
  const saveToFavorite = () =>{
    setAddbookmark(true)
  }
  const deleteToFavorite = () =>{
    setAddbookmark(false)
  }
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> navigation.navigate('Details')}>
          
          <View style={styles.imageContainer}>
            {!item.urlToImage ? <Image source={require('../../assets/noImage.png')} style={{width:200, height:200, backgroundColor:'gray', marginHorizontal: 70}} />:<Image source={{uri:item.urlToImage}} style={styles.image} />}
          </View>

          <View style={styles.bookMarkContainer}>
            {addBookmark ? <Fontisto name="bookmark-alt" style={styles.bookMarkcolored} onPress={deleteToFavorite} /> : <Fontisto onPress={saveToFavorite}   name="bookmark" style={styles.bookMark} />   }
          </View>

          <View style={styles.labelAndDateContainer}>
             {item.author ? <Text style={styles.label}>{item.author}</Text> : <Text style={styles.label1}></Text>}          
            <Text style={styles.date}>{item.publishedAt}</Text>
          </View>
          {/* <Text style={styles.title} numberOfLines={4}>RDC: Here goes the info title that describe well the article, this should fit on 4 lines only I wish it will be good enough for people to enjoy what will be shown here I've got nothing left to say but I need to say something to fill the space and check out what the output will look like, that why I'm sorry to joke on you  </Text> */}
          
          <Text style={styles.title} numberOfLines={4}>{item.description}</Text>
      </TouchableOpacity>
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
  imageContainer:{
    backgroundColor:'gray',
    width:'100%',
    borderRadius:10,
  },
  image:{
    width:'100%',
    height:180,
    borderTopRightRadius:5,
    borderTopLeftRadius:5,
  },
  bookMarkContainer:{
    // backgroundColor:'pink',
    position:'absolute',
    right:10,
    top:10,
    
  },
  bookMark:{
    fontSize:35,
    color:'white',
    
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
    color:'white',
  },
  labelAndDateContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:10,
    paddingHorizontal:5,
  },
  label:{
    color:'white',
    backgroundColor:'#72A52F',
    paddingHorizontal:5,
    borderRadius:2,
    fontWeight:'700',
    marginBottom:15,
  },
  label1:{
    color:'white',
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
  }
})

export default InfoCard