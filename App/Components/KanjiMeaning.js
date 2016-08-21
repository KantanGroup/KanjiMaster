import React from 'react'
import { WebView, View, Text } from 'react-native'
import styles from './Styles/KanjiMeaningStyle'
import { Metrics } from '../Themes/'

import HtmlText from './HtmlText'

export default class KanjiMeaning extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    console.log(this.props.kanjiContent);
    
    let keyword;
    if (this.props.kanjiContent.keyword) {
      keyword = this.props.kanjiContent.keyword;
    } else {
      keyword = '漢';
    }
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
      const firstHtml = '<html><body><div>'
      const lastHtml = '</div></body></html>'
      setsumei = (
        <HtmlText html={`${firstHtml}${this.props.kanjiContent.setsumei}${lastHtml}`}/>

      );
    }
    return (
      <View style={styles.box}>
        <View style={styles.row}>
          <View style={styles.card}>
            <Text style={styles.kanji}>
              {keyword}
            </Text>
          </View>
          <View style={styles.content}>
            <View style={styles.content}>
              <Text style={[styles.text]}>
                {this.props.kanjiContent.hantu}
              </Text>
              {onyomi}
              {kunyomi}
              <Text style={[styles.text]}>
                JLPT: {this.props.kanjiContent.level}
              </Text>
              <Text style={[styles.text]}>
                Bộ thành phần: {this.props.kanjiContent.part}
              </Text>
            </View>
          </View>
        </View>
        {setsumei}
      </View>
    )
  }
}
