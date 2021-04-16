import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons as notification } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const SideMenu = ({navigation}) =>{


  const menuItems = [
    {icon:<Feather name="user-plus" size={24} color="black" />, name:"Profile", onPress : () => {
      return navigation.navigate('User')}},
    {icon:<MaterialIcons name="home" size={24} color="black" />, name:"Home", onPress : ()=> {navigation.navigate('Home')}},
    {icon:<Fontisto name="bookmark" size={24} color="black" />, name:"Bookmark", onPress : ()=> {navigation.navigate('A lire plus tard')}},
    {icon:<MaterialIcons name="notifications-none" size={24} color="black" />, name:"Notifications", onPress : ()=> {navigation.navigate('Notifications')}},
    {icon:<AntDesign name="team" size={24} color="black" />, name:"A propos de nous", onPress : ()=> {navigation.navigate('About')}},

  ]

  return(
    <View style ={styles.container}>
      <View style={{paddingLeft:10}}>
        { menuItems.map(({icon,name, onPress}) => 
        <TouchableOpacity key={name} onPress={onPress} >
          <View style={styles.item}>
            <Text>{icon}</Text>
            <Text style={styles.itemText}>{name}</Text>
          </View>
        </TouchableOpacity>
        )
        }
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:'red'
  },
  item:{
    flexDirection:'row',
    // justifyContent:'center',
    alignItems:'center',
  },
  itemText:{
    fontSize:14,
    paddingVertical:10,
    paddingLeft:10,
    
  }
})

export default SideMenu