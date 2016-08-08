import React, {PropTypes} from 'react'
import { ScrollView, Image, Text, View } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Images } from '../Themes'
import { Metrics } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import Footer from '../Components/Footer'

// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/KanjiScreenStyle'

// I18n
import I18n from '../I18n/I18n.js'

class KanjiScreen extends React.Component {

  static propTypes = {
    kanjijlpt: PropTypes.func,
    niteirukanji: PropTypes.func,
    douonigigo: PropTypes.func
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>

          <View style={styles.centered}>
            <Image source={Images.clearLogo} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Text style={styles.sectionText} >
              Default screens for development, debugging, and alpha testing
              are available below.
            </Text>
          </View>

          <RoundedButton onPress={this.props.kanjijlpt}>
            {I18n.t('kanjijlpt')}
          </RoundedButton>

          <RoundedButton onPress={this.props.niteirukanji}>
            {I18n.t('niteirukanji')}
          </RoundedButton>

          <RoundedButton onPress={this.props.douonigigo}>
            {I18n.t('douonigigo')}
          </RoundedButton>

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
    kanjijlpt: NavigationActions.kanjijlpt,
    niteirukanji: NavigationActions.niteirukanji,
    douonigigo: NavigationActions.douonigigo
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KanjiScreen)
