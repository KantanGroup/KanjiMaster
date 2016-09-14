import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/FlashCardEmptyStyle'

export default class FlashCardEmpty extends React.Component {

  render () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'green'}}>おめでとうございます</Text>
      </View>
    )
  }
}
