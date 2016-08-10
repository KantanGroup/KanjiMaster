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

import KanjiCardDefine from '../Components/KanjiCardDefine'
import KanjiCardDraw from '../Components/KanjiCardDraw'
import KanjiCardByTangoListView from '../Components/KanjiCardByTangoListView'
import Footer from '../Components/Footer'

class KanjiViewScreen extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>

          <KanjiCardDefine />

          <KanjiCardDraw />

          <KanjiCardByTangoListView />

          <Footer />

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
