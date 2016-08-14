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
    let svg = '<svg height="250px" version="1.1" width="250px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="overflow: hidden; position: relative; left: -0.5px;" viewBox="0 0 125 125" preserveAspectRatio="xMinYMin" class="dmak-svg"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.1.2</desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs><path fill="none" stroke="#cccccc" d="M62.5,0L62.5,125" stroke-width="0.5" stroke-dasharray="4,1.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#cccccc" d="M0,62.5L125,62.5" stroke-width="0.5" stroke-dasharray="4,1.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#bf001c" d="M28.15,15C28.459999999999997,16.21,28.57,17.16,27.99,18.44C25.25,24.5,22.369999999999997,28.840000000000003,17.919999999999998,34.480000000000004C17.119999999999997,35.49,17.249999999999996,36.870000000000005,18.419999999999998,37.52C20.83,38.85,24.259999999999998,41.260000000000005,27.06,43.49" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 36.5704, 36.5704; stroke-dashoffset: 0;"></path><text x="21.75" y="15.13" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none" fill="#bf001c" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;"><tspan dy="2.755000000000001" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">1</tspan></text><path fill="none" stroke="#bf2626" d="M37.03,26.94C37.370000000000005,28.12,37.410000000000004,29.310000000000002,36.78,30.380000000000003C31.62,39.120000000000005,24.75,48.5,18.150000000000002,56.11C16.51,58,17.37,59.62,19.470000000000002,59.08C24.300000000000004,57.82,32.75,55.5,39.45,53.339999999999996" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 61.1156, 61.1156; stroke-dashoffset: 0;"></path><text x="29.50" y="28.50" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none" fill="#bf2626" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;"><tspan dy="2.75" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2</tspan></text><path fill="none" stroke="#bf6b26" d="M36.75,47.62C38.96,49.629999999999995,42.45,55.87,43,59" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 13.1165, 13.1165; stroke-dashoffset: 0;"></path><text x="35.25" y="46.55" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none" fill="#bf6b26" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;"><tspan dy="2.753124999999997" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">3</tspan></text><path fill="none" stroke="#bfaf26" d="M28.83,59.01C29.599999999999998,59.78,30.11,61.129999999999995,30.11,62.29C30.11,69.38,30.02,81.25,30.02,89C30.02,91.96,29.95,94.18,29.95,95" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 36.3124, 36.3124; stroke-dashoffset: 0;"></path><text x="23.25" y="65.98" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none" fill="#bfaf26" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;"><tspan dy="2.761250000000004" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">4</tspan></text><path fill="none" stroke="#89bf26" d="M21.5,69.5C21.75,70.5,21.75,71.5,21.38,72.55C20.11,76.17,16.299999999999997,82.95,14.25,86" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 18.3475, 18.3475; stroke-dashoffset: 0;"></path><text x="12.50" y="71.50" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none" fill="#89bf26" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;"><tspan dy="2.75" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">5</tspan></text><path fill="none" stroke="#44bf26" d="M37.5,66.25C39.62,69.62,41.26,77.45,41.75,80.5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 14.9384, 14.9384; stroke-dashoffset: 0;"></path><text x="35.50" y="63.50" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none" fill="#44bf26" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;"><tspan dy="2.75" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">6</tspan></text><path fill="none" stroke="#26bf4c" d="M60.5,17.27C60.71,17.83,60.74,18.99,60.46,19.669999999999998C58.45,24.589999999999996,54.65,30.63,48.55,35.379999999999995" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 22.3744, 22.3744; stroke-dashoffset: 0;"></path><text x="52.50" y="16.63" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none" fill="#26bf4c" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;"><tspan dy="2.754999999999999" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">7</tspan></text><path fill="none" stroke="#26bf91" d="M69.8,12.5C73.25,13.12,82.03,24.53,88.00999999999999,29.49C90.03999999999999,31.169999999999998,91.99999999999999,32.75,94.44999999999999,33.68" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 32.755, 32.755; stroke-dashoffset: 0;"></path><text x="64.50" y="12.50" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none" fill="#26bf91" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;"><tspan dy="2.75" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">8</tspan></text><path fill="none" stroke="#26a8bf" d="M67.4,31.3C67.63000000000001,32.38,67.5,33.88,66.89,34.89C62.97,41.34,60,45.62,55.54,51.31C53.75,53.59,54.68,55.22,56.839999999999996,54.620000000000005C62.879999999999995,52.95,72.5,51.00000000000001,81.46,49.21000000000001" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 54.2874, 54.2874; stroke-dashoffset: 0;"></path><text x="60.75" y="32.98" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none" fill="#26a8bf" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;"><tspan dy="2.761249999999997" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">9</tspan></text><path fill="none" stroke="#2663bf" d="M78,42.88C81.01,45.11,85.78,52.040000000000006,86.53999999999999,55.5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 15.4239, 15.4239; stroke-dashoffset: 0;"></path><text x="68.70" y="47.90" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none" fill="#2663bf" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;"><tspan dy="2.7593749999999986" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">10</tspan></text><path fill="none" stroke="#2d26bf" d="M50.62,75.12C50.839999999999996,77.08,48.43,85.71000000000001,46.68,88.97" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 14.4797, 14.4797; stroke-dashoffset: 0;"></path><text x="45.50" y="70.50" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none" fill="#2d26bf" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;"><tspan dy="2.75" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">11</tspan></text><path fill="none" stroke="#7226bf" d="M56.61,68.32C64.88,85.25,71.58,91.06,86.6,91.1C93.63,91.11999999999999,93.25,88.5,88.63,84.53999999999999" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 52.5189, 52.5189; stroke-dashoffset: 0;"></path><text x="48.50" y="63.50" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none" fill="#7226bf" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;"><tspan dy="2.75" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">12</tspan></text><path fill="none" stroke="#b726bf" d="M70.48,64.5C72.87,69.88,74.84,71.36,75.55000000000001,67.61" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 9.24168, 9.24168; stroke-dashoffset: 0;"></path><text x="61.50" y="63.13" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none" fill="#b726bf" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;"><tspan dy="2.7550000000000026" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">13</tspan></text><path fill="none" stroke="#bf2682" d="M89.1,65.51C91.94999999999999,67.53,94.5,70.88000000000001,96.41,75.62" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round; transition: stroke 400ms ease; stroke-dasharray: 12.644, 12.644; stroke-dashoffset: 0;"></path><text x="79.50" y="63.50" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="8px" stroke="none" fill="#bf2682" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 8px;"><tspan dy="2.75" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">14</tspan></text></svg>';

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

    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode='stretch' />
        <ScrollView style={styles.container}>

          <KanjiMeaning />

          <KanjiDraw svg={svg}/>

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
