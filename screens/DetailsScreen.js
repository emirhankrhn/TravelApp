import React from 'react'
import { Button, Text, View } from 'react-native'

const DetailsScreen = ({route, navigation}) => {

    const { place, rating } = route.params || {};
    
  return (
    <View>
      <Text>Details Screen</Text>
      <Text>Welcome To {place ? place : 'N/A'}</Text>
      {rating === 5 ? (
        <Text >⭐⭐⭐⭐⭐ Bu yer mükemmel! 5 yıldız!</Text>
      ) : (
        <Text >⭐⭐⭐⭐ Güzel ama mükemmel değil. {rating} yıldız.</Text>
      )}
      <Button title="Go to Home" onPress={() => navigation.goBack()}/>
    </View>
  )
}

export default DetailsScreen