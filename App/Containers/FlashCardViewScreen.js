import React from 'react'
import ReactNative, { Image } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Images } from '../Themes'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import { createAnimatableComponent, View, Text } from 'react-native-animatable';
import { Actions as NavigationActions } from 'react-native-router-flux'

const ScrollView = createAnimatableComponent(ReactNative.ScrollView);

// Styles
import styles from './Styles/FlashCardViewScreenStyle'

// I18n
import I18n from 'react-native-i18n'

import Footer from '../Components/Footer'

class FlashCardViewScreen extends React.Component {

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />

        <ScrollView animation="bounceIn" duration={500} style={styles.container}>

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

export default connect(mapStateToProps, mapDispatchToProps)(FlashCardViewScreen)
