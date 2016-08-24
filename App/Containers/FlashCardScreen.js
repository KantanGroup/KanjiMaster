import React from 'react'
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
import styles from './Styles/FlashCardScreenStyle'

// I18n
import I18n from '../I18n/I18n.js'

// Components
import FlashCard from '../Components/FlashCard'
import Footer from '../Components/Footer'

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
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <View style={styles.containerCenter}>

          <View style={styles.centered}>
            <FlashCard card={this.state.showData} setting={cardSetting}/>
          </View>

          <Footer type='black'/>

        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(FlashCardScreen)
