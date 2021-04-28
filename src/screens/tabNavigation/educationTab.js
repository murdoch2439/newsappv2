import React, {useState, useEffect} from 'react'
import { View, StyleSheet, Button, FlatList, ActivityIndicator, TouchableNativeFeedback } from 'react-native'
import InfoCard from '../../components/infoCard'
import axios from 'axios'



const EducationInfosScreen = ({navigation}) => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        setTimeout(()=>{

            getNewsFromAPI()
        }, 1000)
        

    }, [])
    const getNewsFromAPI = () =>{
        axios.get('https://7sur7.cd/api/v1/articles/9')
        .then( async (response) => {
            // console.log(response.data);
            setNews(response.data)
            setLoading(false);
            
        })
        .catch((error) => {
            console.log(error);
    
        })
    }

    // if(!news){
    //     return null
    // }

    const renderItem = ({item}) => <InfoCard item={item} onPressHandler={()=> navigation.navigate('Details', {item:item})} />;
                    

    return(
        
        <View style = { styles.container }>           
            
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={news}
                keyExtractor={(article) => article.nid}
                renderItem ={renderItem}
                ListEmptyComponent={() => {
                    if (loading) {
                        return (
                        <View style={styles.loading}>
                            <ActivityIndicator size="large"  color="#72A52F" />
                        </View>
                        );
                    }

                    return null;
                }}
                
            />
             
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#CCCCCC'

    },
    loading: {
        marginVertical: 250,
        justifyContent:'center',
        alignItems:'center',
    },
})

export default EducationInfosScreen