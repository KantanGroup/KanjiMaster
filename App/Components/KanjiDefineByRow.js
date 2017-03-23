import React from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'
import styles from './Styles/KanjiDefineByRowStyle'
import { Images } from '../Themes'

import Star from './Star'

export default class KanjiDefineByRow extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    let onyomi;
    if (this.props.kanjiContent.onReading) {
      onyomi = (
        <Text numberOfLines={1} style={styles.onyomi}>訓：{this.props.kanjiContent.onReading}</Text>
      );
    }
    let kunyomi;
    if (this.props.kanjiContent.kunReading) {
      kunyomi = (
        <Text numberOfLines={1} style={styles.kunyomi}>音：{this.props.kanjiContent.kunReading}</Text>
      );
    }
    return (
      <TouchableOpacity style={styles.kanjiRow} onPress={this.props.onPress}>
        <View style={styles.card}>
          <Text style={styles.kanji}>{String.fromCharCode(this.props.kanjiContent.code)}</Text>
          <Text numberOfLines={1} style={styles.kanjiHanTu}>{this.props.kanjiContent.meaning}</Text>
        </View>
        <View style={styles.content}>
          <Star rating={this.props.kanjiContent.jlptLevel} />
          {onyomi}
          {kunyomi}
        </View>
      </TouchableOpacity>
    )
  }
}
