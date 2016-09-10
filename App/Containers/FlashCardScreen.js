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
import styles from './Styles/FlashCardScreenStyle'

// I18n
import I18n from 'react-native-i18n'

// Components
import FlashCard from '../Components/FlashCard'
import DatabaseService from '../Services/DatabaseService'

var cardDefinition = {
  definition: 'Kanji',
  kanji: '漢字',
  hiragana: 'かんじ'
}

var cardMeaning = {
  definition: 'Chữ hán',
  kanji: '漢字',
  hiragana: '漢字は難しい'
}

class FlashCardScreen extends React.Component {

  constructor (props) {
    super(props)

    // Datasource is always in state
    this.state = {
      showDefinition: true,
      showData: cardDefinition
    }
  }

  render () {
    var cardSetting = {
      definition: true,
      hiragana: true
    }

    return (
      <View style={{flex: 1}}>
        <FlashCard card={this.state.showData} setting={cardSetting}/>
      </View>
    )
  }
}

FlashCardScreen.propTypes = {
  dispatch: PropTypes.func,
  createDesk: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashCardScreen)
