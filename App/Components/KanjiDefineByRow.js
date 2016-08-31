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
    if (this.props.kanjiContent.onyomi) {
      onyomi = (
        <Text numberOfLines={1} style={styles.onyomi}>訓：{this.props.kanjiContent.onyomi}</Text>
      );
    }
    let kunyomi;
    if (this.props.kanjiContent.kunyomi) {
      kunyomi = (
        <Text numberOfLines={1} style={styles.kunyomi}>音：{this.props.kanjiContent.kunyomi}</Text>
      );
    }
    return (
      <TouchableOpacity style={styles.kanjiRow} onPress={this.props.onPress}>
        <View style={styles.card}>
          <Text numberOfLines={1} style={styles.kanjiHanTu}>{this.props.kanjiContent.hantu}</Text>
          <Text style={styles.kanji}>{this.props.kanjiContent.keyword}</Text>
        </View>
        <View style={styles.content}>
          <Star rating={this.props.kanjiContent.jlpt} />
          {onyomi}
          {kunyomi}
        </View>
      </TouchableOpacity>
    )
  }
}
