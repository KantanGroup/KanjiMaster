import React from 'react'
import { View } from 'react-native'

// Components
import FlashCard from '../Components/FlashCard'

export default class FlashCardScreen extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    var cardSetting = {
      definition: true,
      hiragana: true
    }

    return (
      <View style={{flex: 1}}>
        <FlashCard setting={cardSetting}/>
      </View>
    )
  }
}
