import React, {useState, useEffect} from 'react'
import { View, StyleSheet, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import InfoCard from '../components/infoCard'
import articlesApi from '../api/7s7Api'
import colors from '../components/theme/colors'
// import axios from 'axios'





const HomeScreen = ({navigation}) => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [page, setPage] = useState('1')
    

     

    const listEmptyComponent = () => {
        if (loading && page ===1) {
                    return (
                        <View style={styles.loading}>
                            <ActivityIndicator size="large"  color={colors.primary} />
                        </View>
                        );
                    }

                    return null;
    }

    useEffect(()=>{
        // setTimeout(()=>{

            getNewsFromAPI()
        // }, 1000)
        

    }, [])
    const getNewsFromAPI = (page) =>{
        articlesApi.get(`/all?page=${page}`)
        .then( async (response) => {
            let listData= news
            let data = listData.concat(response.data)
            // console.log(response.data);
            setNews(data)
            setLoading(false);
            setIsRefreshing(false)
            console.log(response.data);

            
        })
        .catch((error) => {
            setLoading(false);
            console.log(error);
    
        })
    }

    const handleRefreshing= () =>{
        setIsRefreshing(true)
        getNewsFromAPI()
    }

    // if(!news){
    //     return null
    // }

    const renderItem = ({item}) => <InfoCard item={item} loading={loading} onPressHandler={()=> navigation.navigate('Details', {item})} />;

    const renderFooter = () => {
   
        if (!loading){
            return null
        }else{

            return (
            
            <View style={styles.loading}>
                            <ActivityIndicator size="large"  color={colors.primary} />
                        </View>
            )
        }
  }
                    

  const handleLoadMore = () => {
    if (!loading) {
      setPage( page + 1 ); // increase page by 1
      getNewsFromAPI(page); // method for API call 
    }
  };

    return(
        
        <View style = { styles.container }>           
            
            <FlatList
                showsVerticalScrollIndicator={false}
                data={news}
                extraData={setNews}
                keyExtractor={(article) => String(article.nid)}
                renderItem ={renderItem}
                ListEmptyComponent={listEmptyComponent}
                refreshControl={
                    <RefreshControl refreshing={isRefreshing} onRefresh={handleRefreshing} />
                }
                ListFooterComponent={renderFooter}
                onEndReachedThreshold={0.5}
                // ListFooterComponentStyle={{backgroundColor:'green'}}
                onEndReached={handleLoadMore}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#CCCCCC',
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