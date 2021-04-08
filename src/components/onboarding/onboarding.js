import React, {useState, useRef} from 'react';
import {View, StyleSheet, Text, FlatList, Animated} from 'react-native';
import OnBoardingItem from './onboardingItem';
import Paginator from './paginator'
import slides from './slides'
import NextButton from './nextButton'


const OnboardingScreen = () =>{
  const {currentIndex, setCurrentIndex} = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems})=> {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current;

  const scrollTo = () =>{
    // console.log('it works');
      if(currentIndex < slides.length -1){
        slidesRef.curent.scrollToIndex({index: currentIndex + 1})
      } else{
        console.log('Last item');
      }
  }


  return(
    <View style={styles.container}>
      <View style={{flex:3}}>

        <FlatList
          data={slides}
          keyExtractor={(item)=> item.id}
          renderItem = { ({item}) =>
            <OnBoardingItem item={item} />
          }

          horizontal
          showsHorizontalScrollIndicator ={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event([{nativeEvent:{contentOffset:{x: scrollX}}}], {useNativeDriver:false,})}

          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}

        />
      </View>

      <Paginator data={slides} scrollX={scrollX} />
      
      <NextButton
        scrollTo={scrollTo} 
         percentage ={(currentIndex + 1) * (100 / slides.length)}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default OnboardingScreen