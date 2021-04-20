import React from 'react';
import {View,StyleSheet, Text, Image, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../components/theme/colors';
import categories from '../components/common/data/categories';


const DetailsScreen = ({route}) =>{
    const {item} = route.params
    
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>

                {!item.field_image ? <Image source={require('../../assets/noImage.png')} style={{width:200, height:200}} />:<Image source={{uri:`https://7sur7.cd${item.field_image}`}} style={styles.image} />}
            </View>

        
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>Publié: {item.created}</Text>
            <Text style={styles.content}>{item.body}</Text>
            <View style={styles.tagsContainer}>

                <AntDesign name="tags" style={styles.tagsIcon} />
                <Text style={styles.tagsName}>{categories[item.field_categorie]}</Text>
            </View>

        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imageContainer:{
        width:'100%',
        height:200,
        backgroundColor:'gray',
        alignItems:'center',
    },
    image:{
        width:'100%',
        height:'100%',
    },
    title:{
        // fontWeight:'bold',
        marginVertical:15,
        marginHorizontal:15,
        fontSize:20,
    },
    date:{
        fontSize:12,
        marginHorizontal:15,
        marginBottom:10,
        color:'gray'
    },
    content:{
        marginHorizontal:15,
        fontSize:17,
        // textAlign:'justify'
    },
    tagsContainer:{
        flexDirection:'row',
        marginHorizontal:15,
        marginTop:20,
    },
    tagsIcon:{
        color:colors.primary,
        fontSize:24,
        marginRight:10,
    },
    tagsName:{
        color:colors.primary,
    }
})

export default DetailsScreen