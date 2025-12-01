import React from 'react'
import { Button } from 'react-native'
import { View, Text } from 'react-native'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Home Screen</Text>
     <Button title="Go to Details" onPress={() => navigation.navigate('Details')}/>
    </View>
  )
}

export default HomeScreen