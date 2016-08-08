import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './Styles/KanjiCardStyle'
import { Images } from '../Themes'

export default class KanjiCard extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    let onyomi;
    if (this.props.kanjiContent.onyomi) {
      onyomi = (
        <Text numberOfLines={1} style={styles.onyomi}>訓読み：{this.props.kanjiContent.onyomi}</Text>
      );
    }
    let kunyomi;
    if (this.props.kanjiContent.kunyomi) {
      kunyomi = (
        <Text numberOfLines={1} style={styles.kunyomi}>音読み：{this.props.kanjiContent.kunyomi}</Text>
      );
    }
    return (
      <View style={styles.kanjiRow}>
        <View style={styles.card}>
          <Text numberOfLines={1} style={styles.kanjiHanTu}>{this.props.kanjiContent.hantu}</Text>
          <Text style={styles.kanji}>{this.props.kanjiContent.kanji}</Text>
        </View>
        <View style={styles.content}>
          {onyomi}
          {kunyomi}
        </View>
      </View>
    )
  }
}
