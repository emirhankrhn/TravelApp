import React from 'react'
import { Button, Text, View } from 'react-native'

const DetailsScreen = ({navigation}) => {
  return (
    <View>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.goBack()}/>
    </View>
  )
}

export default DetailsScreen