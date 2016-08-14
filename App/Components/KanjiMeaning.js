import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/KanjiMeaningStyle'

export default class KanjiMeaning extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    let onyomi;
    if (this.props.kanjiContent.onyomi) {
      onyomi = (
        <Text numberOfLines={1} style={styles.onyomi}>訓:{this.props.kanjiContent.onyomi}</Text>
      );
    }
    let kunyomi;
    if (this.props.kanjiContent.kunyomi) {
      kunyomi = (
        <Text numberOfLines={1} style={styles.kunyomi}>音:{this.props.kanjiContent.kunyomi}</Text>
      );
    }
    let setsumei;
    if (this.props.kanjiContent.setsumei) {
      setsumei = (
        <View>
          <Text style={[styles.text]}>
            {this.props.kanjiContent.setsumei}
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.box}>
        <View style={styles.row}>
          <View style={styles.card}>
            <Text style={styles.kanji}>
              漢
            </Text>
          </View>
          <View style={styles.content}>
            <View style={styles.content}>
              <Text style={[styles.text]}>
                Bộ: 漢 - HÁN
              </Text>
              {onyomi}
              {kunyomi}
              <Text style={[styles.text]}>
                JLPT: 4
              </Text>
              <Text style={[styles.text]}>
                Bộ thành phần: 氵 THỦY
              </Text>
            </View>
          </View>
        </View>
        {setsumei}
      </View>
    )
  }
}
