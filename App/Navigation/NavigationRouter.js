import React, { Component } from 'react'
import { ToastAndroid, BackAndroid, View } from 'react-native'
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

// screens identified by the router
import StartupScreen from '../Containers/StartupScreen'
import KanjiScreen from '../Containers/KanjiScreen'
import KanjiByJLPTScreen from '../Containers/KanjiByJLPTScreen'
import KanjiViewScreen from '../Containers/KanjiViewScreen'
import NiteirukanjiScreen from '../Containers/ListviewExample'
import DouonigigoScreen from '../Containers/KanjiScreen'
import TangoScreen from '../Containers/FlashCardScreen'
import BunpouScreen from '../Containers/AutocompleteExample'
import SettingScreen from '../Containers/SettingScreen'
import FlashCardScreen from '../Containers/FlashCardScreen'
import FlashCardViewScreen from '../Containers/FlashCardViewScreen'
import SearchScreen from '../Containers/SearchScreen'
import DeskListScreen from '../Containers/DeskListScreen'
import DeskCreateScreen from '../Containers/DeskCreateScreen'

// I18n
import I18n from 'react-native-i18n'

import KanjiOptions from '../Components/KanjiOptions'
/***************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

var backButtonPressedOnceToExit = false;

class NavigationRouter extends Component {
  componentWillMount = () => {
    BackAndroid.addEventListener('hardwareBackPress', () => {
        if (backButtonPressedOnceToExit) {
            BackAndroid.exitApp();
        }
        try {
            Actions.pop();
            return true;
        }
        catch (err) {
            Actions.startup();
            backButtonPressedOnceToExit = true;
            setTimeout(function() {
                backButtonPressedOnceToExit = false;
            }, 2000);
            ToastAndroid.show('Press again to exit', ToastAndroid.SHORT);
            return true;
        }
    });
  }

  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='startup' component={StartupScreen} renderLeftButton={NavItems.hamburgerButton} type={ActionConst.RESET}/>
            {/* Home -> Kanji */}
            <Scene key='kanji' component={KanjiScreen} title={I18n.t('kanji')} type={ActionConst.RESET}/>
            {/* Home -> Kanji -> Kanji JLPT */}
            <Scene key='kanjijlpt' component={KanjiByJLPTScreen} title={I18n.t('kanjijlpt')} type={ActionConst.RESET}/>
            {/* Home -> Kanji -> Kanji JLPT -> Kanji View */}
            <Scene key='kanjiview' component={KanjiViewScreen} title={I18n.t('kanji')} renderRightButton={() => <KanjiOptions />}/>
            {/* Home -> Kanji -> Niteiru Kanji */}
            <Scene key='niteirukanji' component={NiteirukanjiScreen} title={I18n.t('niteirukanji')} type={ActionConst.RESET}/>
            {/* Home -> Kanji -> Douonigigo Kanji */}
            <Scene key='douonigigo' component={DouonigigoScreen} title={I18n.t('douonigigo')} type={ActionConst.RESET}/>

            {/* Home -> Tango */}
            <Scene key='tango' component={TangoScreen} title={I18n.t('tango')} type={ActionConst.RESET}/>

            {/* Home -> Bunpou */}
            <Scene key='bunpou' component={BunpouScreen} title={I18n.t('bunpou')} type={ActionConst.RESET}/>

            {/* Home -> Setting */}
            <Scene key='settei' component={SettingScreen} title={I18n.t('settei')} type={ActionConst.RESET}/>

            {/* Home -> Desk -> Flashcard */}
            <Scene key='flashcard' component={FlashCardScreen} title={I18n.t('flashcard')} type={ActionConst.RESET}/>

            {/* Home -> Desk */}
            <Scene key='desk' component={DeskListScreen} title='Desk' type={ActionConst.RESET}/>
            {/* Home -> Desk -> Create desk*/}
            <Scene key='deskCreation' component={DeskCreateScreen} title='Create Desk'/>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
