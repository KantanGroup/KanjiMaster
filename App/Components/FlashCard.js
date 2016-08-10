import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/FlashCardStyle'

import * as Animatable from 'react-native-animatable'

export default class FlashCard extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    let definition;
    if (this.props.card.definition) {
      definition = (
        <Text numberOfLines={2} style={styles.definition}>{this.props.card.definition}</Text>
      );
    }
    let hiragana;
    if (this.props.card.hiragana) {
      hiragana = (
        <Text numberOfLines={1} style={styles.hiragana}>{this.props.card.hiragana}</Text>
      );
    }
    return (
      <Animatable.View
        delay={this.props.delay ? this.props.delay: 500}
        animation={this.props.animation ? this.props.animation : 'bounceIn'}
      >
        <TouchableOpacity style={styles.card} onPress={this.props.onPress}>
          {definition}
          <Text numberOfLines={1} style={styles.kanji}>{this.props.card.kanji}</Text>
          {hiragana}
        </TouchableOpacity>
      </Animatable.View>
    )
  }
}
