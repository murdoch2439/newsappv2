import React, {useState, useEffect} from 'react'
import { View, StyleSheet, Button, FlatList, ActivityIndicator, TouchableNativeFeedback } from 'react-native'
import InfoCard from '../components/infoCard'
import newApi from '../../api/actuApi'



const HomeScreen = ({navigation}) => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        setTimeout(()=>{

            getNewsFromAPI()
        }, 1000)
        

    }, [])
    const getNewsFromAPI = () =>{
        newApi.get('everything?q=Apple&from=2021-03-11&sortBy=popularity&apiKey=3e37e8dc20f14aeb8e557b2c61454855')
        .then( async (response) => {
            setNews(response.data)
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            
        })
    }

    if(!news){
        return null
    }

    const renderItem = ({item}) =>{
                    return(
                        
                            <InfoCard item={item}  />
                        
                        
                    )
                }


    return(
        

        <View style = { styles.container }>           
            
            <FlatList 
                data={news.articles}
                keyExtractor={(article) => article.description}
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
            
            <Button title="Go to Details Screen" onPress={()=> navigation.navigate('Details')}/> 
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

export default HomeScreen