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
import I18n from 'react-native-i18n'

import KanjiComponent from '../Components/KanjiComponent'

class KanjiViewScreen extends React.Component {
  constructor (props) {
    super(props)
  }

  componentWillMount() {
    this.props.searchKanji(this.props.kanjiContent.keyword)
  }

  render () {
    let tangos = require('../Fixtures/tangos.json');

    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode='stretch' />
        <ScrollView style={styles.container}>

          <KanjiComponent kanjiContent={this.props.kanjiContent} tangos={tangos}/>
          
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
    searchKanji: (keyword) => dispatch(Actions.searchKanji(keyword))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KanjiViewScreen)
