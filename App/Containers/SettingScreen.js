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
import { SegmentedControls } from 'react-native-radio-buttons'

// Styles
import styles from './Styles/SettingScreenStyle'

// I18n
import I18n from 'react-native-i18n'

// Components
import FlashCard from '../Components/FlashCard'
import Footer from '../Components/Footer'
import SwitchButton from '../Components/SwitchButton'
import SettingItem from '../Components/SettingItem'
import SettingLanguage from '../Components/SettingLanguage'

class SettingScreen extends React.Component {

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />

        <ScrollView style={styles.container}>

          <SettingItem title={I18n.t('setteiHanTu')}>
            <SwitchButton ref='setteiHanTu' label='Hiển thị hỗ trợ Hán Tự'/>
          </SettingItem>

          <SettingItem title={I18n.t('settingLanguage')}>
            <SettingLanguage　language='en' direction='column'/>
          </SettingItem>

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

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen)
