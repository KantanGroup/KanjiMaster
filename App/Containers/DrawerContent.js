import React, { Component, PropTypes } from 'react'
import { ScrollView, Image } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// I18n
import I18n from '../I18n/I18n.js'

class DrawerContent extends Component {

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressStartup = () => {
    this.toggleDrawer()
    NavigationActions.startup()
  }

  handlePressKanji = () => {
    this.toggleDrawer()
    NavigationActions.kanji()
  }

  handlePressNiteirukanji = () => {
    this.toggleDrawer()
    NavigationActions.niteirukanji()
  }

  handlePressDouonigigo = () => {
    this.toggleDrawer()
    NavigationActions.douonigigo()
  }

  handlePressSettei = () => {
    this.toggleDrawer()
    NavigationActions.settei()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <DrawerButton text={I18n.t('home')} onPress={this.handlePressStartup} />
        <DrawerButton text={I18n.t('kanji')} onPress={this.handlePressKanji} />
        <DrawerButton text={I18n.t('niteirukanji')} onPress={this.handlePressNiteirukanji} />
        <DrawerButton text={I18n.t('douonigigo')} onPress={this.handlePressDouonigigo} />
        <DrawerButton text={I18n.t('settei')} onPress={this.handlePressSettei} />
      </ScrollView>
    )
  }

}

DrawerContent.propTypes = {
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
