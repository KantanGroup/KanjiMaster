import React, {PropTypes} from 'react'
import { ScrollView, Image, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import { Metrics } from '../Themes'

// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/SearchScreenStyle'

// I18n
import I18n from 'react-native-i18n'

import KanjiMeaning from '../Components/KanjiMeaning'
import KanjiDraw from '../Components/KanjiDraw'
import KanjiMeaningByTango from '../Components/KanjiMeaningByTango'
import Footer from '../Components/Footer'

class SearchScreen extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    //console.log(this.props.data);
    console.log(this.props.title);
  }

  render () {

    let tangos = require('../Fixtures/tangos.json');

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

          <KanjiMeaning kanjiContent={kanjiContent}/>

          <KanjiMeaningByTango tangos={tangos}/>

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

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)
