import React, {PropTypes} from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/KanjiMeaningStyle'
import { Metrics } from '../Themes/'

import Swiper from 'react-native-swiper';
import HTMLView from 'react-native-htmlview';
import SwiperComponent from './SwiperComponent'

class KanjiMeaning extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      keyword: this.props.kanjiContent.keyword,
      hantu: this.props.kanjiContent.hantu,
      onyomi: this.props.kanjiContent.onyomi,
      kunyomi: this.props.kanjiContent.kunyomi,
      jlpt: this.props.kanjiContent.jlpt,
      radical: this.props.kanjiContent.radical,
      meanings: this.props.kanjiContent.meanings
    }
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
    if (this.state.meanings) {
      var meanings = this.state.meanings;
      var datas = [];
      Object.keys(meanings).forEach(function(key) {
        datas.push(meanings[key].meaning);
      });
      setsumei = (
        <View style={{padding: 10}}>
          <SwiperComponent width={330} height={80} datas={datas}/>
        </View>
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
