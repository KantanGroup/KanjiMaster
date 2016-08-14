import React, {PropTypes} from 'react'
import { ScrollView, Image, Text, View } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Images } from '../Themes'
import { Metrics } from '../Themes'

// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/KanjiViewScreenStyle'

// I18n
import I18n from '../I18n/I18n.js'

import KanjiMeaning from '../Components/KanjiMeaning'
import KanjiDraw from '../Components/KanjiDraw'
import KanjiMeaningByTango from '../Components/KanjiMeaningByTango'
import Footer from '../Components/Footer'

class KanjiViewScreen extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let tangos =
    [{
    	tango: "実際",
    	hiragana: "じっさい",
      hanViet: "SỰ THỰC",
    	meanings: [{
        language: 'en',
        en: [{
          meaning: "practicality; practical",
          level: 5,
          author: "tuanta17",
          mid: 11
        }, {
          meaning: "reality; actuality; actual conditions",
          level: 5,
          author: "tuanta17",
          mid: 12
        }, {
          meaning: "bhutakoti (limit of reality)",
          level: 5,
          author: "tuanta17",
          mid: 13
        }]
      }, {
        language: 'ja',
        ja: [{
          meaning: "物事のあるがままの状態。「老人医療の実際に目を向ける」「実際は経営が苦しい」",
          level: 5,
          author: "tuanta17",
          mid: 21
        }, {
          meaning: "想像や理論でなく、実地の場合。「実際に応用する」「実際にあった話」「実際問題」",
          level: 5,
          author: "tuanta17",
          mid: 22
        }, {
          meaning: "仏語。真如、または無余涅槃(むよねはん)のこと。存在の究極的な姿。",
          level: 5,
          author: "tuanta17",
          mid: 23
        }]
      }, {
        language: 'vi',
        vi: [{
          meaning: "Sự thực",
          level: 5,
          author: "tuanta17",
          mid: 21
        }, {
          meaning: "Thật",
          level: 5,
          author: "tuanta17",
          mid: 22
        }, {
          meaning: "Thực tế",
          level: 5,
          author: "tuanta17",
          mid: 23
        }]
      }]
    },{
    	tango: "じっさい",
    	hiragana: "じっさい",
    	meanings: [{
        language: 'en',
        en: [{
          meaning: "practicality; practical",
          level: 5,
          author: "tuanta17",
          mid: 11
        }, {
          meaning: "reality; actuality; actual conditions",
          level: 5,
          author: "tuanta17",
          mid: 12
        }, {
          meaning: "bhutakoti (limit of reality)",
          level: 5,
          author: "tuanta17",
          mid: 13
        }]
      }, {
        language: 'ja',
        ja: [{
          meaning: "物事のあるがままの状態。「老人医療の実際に目を向ける」「実際は経営が苦しい」",
          level: 5,
          author: "tuanta17",
          mid: 21
        }, {
          meaning: "想像や理論でなく、実地の場合。「実際に応用する」「実際にあった話」「実際問題」",
          level: 5,
          author: "tuanta17",
          mid: 22
        }, {
          meaning: "仏語。真如、または無余涅槃(むよねはん)のこと。存在の究極的な姿。",
          level: 5,
          author: "tuanta17",
          mid: 23
        }]
      }, {
        language: 'vi',
        vi: [{
          meaning: "Sự thực",
          level: 5,
          author: "tuanta17",
          mid: 21
        }, {
          meaning: "Thật",
          level: 5,
          author: "tuanta17",
          mid: 22
        }, {
          meaning: "Thực tế",
          level: 5,
          author: "tuanta17",
          mid: 23
        }]
      }]
    }];

    let kanjiContent = {
      hantu: "HAN",
      kanji: "漢",
      onyomi: "カン",
      level: "4",
      part: "氵 THỦY",
      setsumei:
      `Nghĩa:
      (1) Sông Hán. Sông Thiên Hà (sông Thiên Hà trên trời).
      (2) Nhà Hán. Nước Tàu.
      (3) Giống Hán, giống dân làm chủ nước Tàu từ đời vua Hoàng Đế trở xuống gọi là giống Hán.`
    };

    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode='stretch' />
        <ScrollView style={styles.container}>

          <KanjiMeaning kanjiContent={kanjiContent}/>

          <KanjiMeaningByTango tangos={tangos}/>

          <Footer type='black'/>

        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(KanjiViewScreen)
