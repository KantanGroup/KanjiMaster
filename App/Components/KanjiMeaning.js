import React, {PropTypes} from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/KanjiMeaningStyle'
import { Metrics } from '../Themes/'

import HTMLView from 'react-native-htmlview';

class KanjiMeaning extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      keyword: this.props.kanjiContent.keyword,
      hantu: this.props.kanjiContent.hantu,
      onyomi: this.props.kanjiContent.onyomi,
      kunyomi: this.props.kanjiContent.kunyomi,
      jlpt: this.props.kanjiContent.jlpt,
      radical: this.props.kanjiContent.radical
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      keyword: nextProps.keyword,
      hantu: nextProps.hantu,
      onyomi: nextProps.onyomi,
      kunyomi: nextProps.kunyomi,
      jlpt: nextProps.jlpt,
      radical: nextProps.radical
    });
  }

  render () {
    let keyword;
    if (this.state.keyword) {
      keyword = this.state.keyword;
    } else {
      keyword = '漢';
    }
    let onyomi;
    if (this.state.onyomi) {
      onyomi = (
        <Text numberOfLines={1} style={styles.onyomi}>訓:{this.state.onyomi}</Text>
      );
    }
    let kunyomi;
    if (this.state.kunyomi) {
      kunyomi = (
        <Text numberOfLines={1} style={styles.kunyomi}>音:{this.state.kunyomi}</Text>
      );
    }
    let setsumei;
    if (this.props.kanjiContent.setsumei) {
      const firstHtml = '<html><body><div>'
      const lastHtml = '</div></body></html>'
      setsumei = (
        <HTMLView value={`${firstHtml}${this.props.kanjiContent.setsumei}${lastHtml}`} />
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
                {this.state.hantu}
              </Text>
              {onyomi}
              {kunyomi}
              <Text style={[styles.text]}>
                JLPT: {this.state.jlpt}
              </Text>
              <Text style={[styles.text]}>
                Radical: {this.state.radical}
              </Text>
            </View>
          </View>
        </View>
        {setsumei}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KanjiMeaning)
