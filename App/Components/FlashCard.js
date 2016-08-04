import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/FlashCardStyle'

import * as Animatable from 'react-native-animatable'

var cardDefault = {
  definition: 'Kanji',
  kanji: '漢字',
  hiragana: 'かんじ'
}

var cardSetting = {
  definition: true,
  hiragana: true
}

var delay = 500;
var animation = 'bounceIn';

export default class FlashCard extends React.Component {

  // Prop type warnings
  static propTypes = {
    card: React.PropTypes.object,
    onPress: React.PropTypes.func,
    setting: React.PropTypes.object
  }

  // Defaults for props
  static defaultProps = {
    card: cardDefault,
    setting: cardSetting
  }

  render () {
    if (this.props.setting.definition && this.props.setting.hiragana) {
      return (
        <Animatable.View
          delay={delay}
          animation={animation}
        >
          <TouchableOpacity style={styles.card} onPress={this.props.onPress}>
            <Text numberOfLines={2} ref="definition" style={styles.definition}>{this.props.card.definition}</Text>
            <Text numberOfLines={1} style={styles.kanji}>{this.props.card.kanji}</Text>
            <Text ref="pinyin" numberOfLines={1} style={styles.hiragana}>{this.props.card.hiragana}</Text>
          </TouchableOpacity>
        </Animatable.View>
      )
    } else if (this.props.setting.definition && !this.props.setting.hiragana) {
      return (
        <Animatable.View
          delay={delay}
          animation={animation}
        >
          <TouchableOpacity style={styles.card} onPress={this.props.onPress}>
            <Text numberOfLines={2} ref="definition" style={styles.definition}>{this.props.card.definition}</Text>
            <Text numberOfLines={1} style={styles.kanji}>{this.props.card.kanji}</Text>
          </TouchableOpacity>
        </Animatable.View>
      )
    } else if (!this.props.setting.definition && this.props.setting.hiragana) {
      return (
        <Animatable.View
          delay={delay}
          animation={animation}
        >
          <TouchableOpacity style={styles.card} onPress={this.props.onPress}>
            <Text numberOfLines={1} style={styles.kanji}>{this.props.card.kanji}</Text>
            <Text ref="pinyin" numberOfLines={1} style={styles.hiragana}>{this.props.card.hiragana}</Text>
          </TouchableOpacity>
        </Animatable.View>
      )
    } else {
      return (
        <Animatable.View
          delay={delay}
          animation={animation}
        >
          <TouchableOpacity style={styles.card} onPress={this.props.onPress}>
            <Text numberOfLines={1} style={styles.kanji}>{this.props.card.kanji}</Text>
          </TouchableOpacity>
        </Animatable.View>
      )
    }
  }
}
