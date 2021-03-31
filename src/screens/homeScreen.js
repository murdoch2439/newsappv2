import React, {useState, useEffect} from 'react'
import { View, StyleSheet, Button, FlatList, ActivityIndicator } from 'react-native'
import InfoCard from '../components/infoCard'
// import newApi from '../../api/actuApi'
import axios from 'axios'



const HomeScreen = ({navigation}) => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        setTimeout(()=>{

            getNewsFromAPI()
        }, 1000)
        

    }, [])
    const getNewsFromAPI = () =>{
        axios.get('https://7sur7.cd/api/v1/articles/all')
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
        flex:1,
        // justifyContent:'center',
        // alignItems:'center',
    },
})

export default HomeScreen