import React, { Component } from 'react'
import { ScrollView, Image } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// I18n
import I18n from 'react-native-i18n'

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
    NavigationActions.kanjijlpt()
  }

  handlePressTango = () => {
    this.toggleDrawer()
    NavigationActions.tango()
  }

  handlePressBunpou = () => {
    this.toggleDrawer()
    NavigationActions.bunpou()
  }

  handlePressDesk = () => {
    this.toggleDrawer()
    NavigationActions.desk()
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
        <DrawerButton text="学習" onPress={this.handlePressDesk} />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
