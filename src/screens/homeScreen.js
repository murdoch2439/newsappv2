import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import HomeHeader from '../components/homeHeader'

const HomeScreen = ({navigation}) => {
    return ( <View style = { styles.container }>
        <Text> Hello It is the Home Screen</Text>
        <Button title="Go to Details Screen" onPress={()=> navigation.navigate('Details')}/>  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink'

    },
})

export default HomeScreen