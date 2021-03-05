import React from 'react'
import { View, StyleSheet, Text, Button, ScrollView } from 'react-native'
import InfoCard from '../components/infoCard'


const HomeScreen = ({navigation}) => {
    return(
        <View style = { styles.container }>
            {/* <Text> Hello It is the Home Screen</Text> */}
            
            <InfoCard />
            <InfoCard />
            <Button title="Go to Details Screen" onPress={()=> navigation.navigate('Details')}/> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0efeb'

    },
})

export default HomeScreen