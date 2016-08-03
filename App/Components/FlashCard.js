import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/FlashCardStyle'

var cardDefault = {}
cardDefault.definition = 'Kanji';
cardDefault.kanji = '漢字';
cardDefault.hiragana = 'かんじ';

var cardDefaultSetting = {}
cardDefaultSetting.definition = true;
cardDefaultSetting.hiragana = true;

export default class FlashCard extends React.Component {

  // Prop type warnings
  static propTypes = {
    card: React.PropTypes.object,
    setting: React.PropTypes.object
  }

  // Defaults for props
  static defaultProps = {
    card: cardDefault,
    setting: cardDefaultSetting
  }

  render () {
    if (this.props.setting.definition && this.props.setting.hiragana) {
      return (
        <View style={styles.card}>
          <Text numberOfLines={2} ref="definition" style={styles.definition}>{this.props.card.definition}</Text>
          <Text numberOfLines={1} style={styles.kanji}>{this.props.card.kanji}</Text>
          <Text ref="pinyin" numberOfLines={1} style={styles.hiragana}>{this.props.card.hiragana}</Text>
        </View>
      )
    } else if (this.props.setting.definition && !this.props.setting.hiragana) {
      return (
        <View style={styles.card}>
          <Text numberOfLines={2} ref="definition" style={styles.definition}>{this.props.card.definition}</Text>
          <Text numberOfLines={1} style={styles.kanji}>{this.props.card.kanji}</Text>
        </View>
      )
    } else if (!this.props.setting.definition && this.props.setting.hiragana) {
      return (
        <View style={styles.card}>
          <Text numberOfLines={1} style={styles.kanji}>{this.props.card.kanji}</Text>
          <Text ref="pinyin" numberOfLines={1} style={styles.hiragana}>{this.props.card.hiragana}</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.card}>
          <Text numberOfLines={1} style={styles.kanji}>{this.props.card.kanji}</Text>
        </View>
      )
    }
  }
}
