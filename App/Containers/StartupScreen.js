import React, {PropTypes} from 'react'
import { ScrollView, Image, Text, View } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Images } from '../Themes'
import { Metrics } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import Footer from '../Components/Footer'
import SearchBox from '../Components/SearchBox'

// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/StartupScreenStyle'

// I18n
import I18n from '../I18n/I18n.js'

class StartupScreen extends React.Component {

  static propTypes = {
    kanji: PropTypes.func,
    tango: PropTypes.func,
    bunpou: PropTypes.func,
    settei: PropTypes.func
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <View style={styles.containerCenter}>
          <SearchBox />

          <RoundedButton onPress={this.props.kanji}>
            {I18n.t('kanji')}
          </RoundedButton>

          <RoundedButton onPress={this.props.tango}>
            {I18n.t('tango')}
          </RoundedButton>

          <RoundedButton onPress={this.props.bunpou}>
            {I18n.t('bunpou')}
          </RoundedButton>

          <RoundedButton onPress={this.props.settei}>
            {I18n.t('settei')}
          </RoundedButton>

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
    kanji: NavigationActions.kanji,
    tango: NavigationActions.tango,
    bunpou: NavigationActions.bunpou,
    settei: NavigationActions.settei
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartupScreen)
