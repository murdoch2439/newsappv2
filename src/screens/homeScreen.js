import React, {useState, useEffect} from 'react'
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import InfoCard from '../components/infoCard'
import articlesApi from '../api/7s7Api'
// import axios from 'axios'





const HomeScreen = ({navigation}) => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)

    const listEmptyComponent = () => {
        if (loading) {
                    return (
                        <View style={styles.loading}>
                            <ActivityIndicator size="large"  color="#72A52F" />
                        </View>
                        );
                    }

                    return null;
    }

    useEffect(()=>{
        setTimeout(()=>{

            getNewsFromAPI()
        }, 1000)
        

    }, [])
    const getNewsFromAPI = () =>{
        articlesApi.get('/all')
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
                keyExtractor={(article) => String(article.nid)}
                renderItem ={renderItem}
                ListEmptyComponent={listEmptyComponent}
                
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
        // flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        marginVertical: 250,
        justifyContent:'center',
        alignItems:'center',
    },
})

export default HomeScreen