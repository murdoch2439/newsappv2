import React from 'react';
import {View,StyleSheet, Text, Button} from 'react-native';

const FormScreen = ({navigation}) =>{
  const goToConfirmationScreen = () =>{
      navigation.navigate('Confirmation')
  }
  return(
    <View style={styles.container}>
      <Text>Form Screen</Text>
      <Button title="Go to confirmation" onPress={goToConfirmationScreen} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})

export default FormScreen