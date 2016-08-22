import React, { Component } from 'react'
import { BackAndroid } from 'react-native'
import { Actions, Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import AllComponentsScreen from '../Containers/AllComponentsScreen'
import UsageExamplesScreen from '../Containers/UsageExamplesScreen'
import LoginScreen from '../Containers/LoginScreen'
import ListviewExample from '../Containers/ListviewExample'
import ListviewGridExample from '../Containers/ListviewGridExample'
import MapviewExample from '../Containers/MapviewExample'
import APITestingScreen from '../Containers/APITestingScreen'
import ThemeScreen from '../Containers/ThemeScreen'
import DeviceInfoScreen from '../Containers/DeviceInfoScreen'
import StartupScreen from '../Containers/StartupScreen'
import KanjiScreen from '../Containers/KanjiScreen'
import KanjiByJLPTScreen from '../Containers/KanjiByJLPTScreen'
import KanjiViewScreen from '../Containers/KanjiViewScreen'
import NiteirukanjiScreen from '../Containers/ListviewExample'
import DouonigigoScreen from '../Containers/KanjiScreen'
import TangoScreen from '../Containers/FlashCardScreen'
import BunpouScreen from '../Containers/AutocompleteExample'
import SetteiScreen from '../Containers/SetteiScreen'
import FlashCardScreen from '../Containers/FlashCardScreen'
import FlashCardViewScreen from '../Containers/FlashCardViewScreen'
import SearchScreen from '../Containers/SearchScreen'

// I18n
import I18n from '../I18n/I18n.js'

/***************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  componentWillMount = () => {
    BackAndroid.addEventListener('hardwareBackPress', () => Actions.pop());
  }

  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene key='presentationScreen' component={PresentationScreen} title='Ignite' renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='componentExamples' component={AllComponentsScreen} title='Components' />
            <Scene key='usageExamples' component={UsageExamplesScreen} title='Usage' rightTitle='Example' onRight={()=>window.alert('Example Pressed')} />
            <Scene key='login' component={LoginScreen} title='Login' hideNavBar />
            <Scene key='listviewExample' component={ListviewExample} title='Listview Example' />
            <Scene key='listviewGridExample' component={ListviewGridExample} title='Listview Grid' />
            <Scene key='mapviewExample' component={MapviewExample} title='Mapview Example' />
            <Scene key='apiTesting' component={APITestingScreen} title='API Testing' />
            <Scene key='theme' component={ThemeScreen} title='Theme' />
            <Scene key='deviceInfo' component={DeviceInfoScreen} title='Device Info' />
            <Scene initial key='startup' component={StartupScreen} title={I18n.t('kanjimaster')} renderLeftButton={NavItems.hamburgerButton}/>
            <Scene key='kanji' component={KanjiScreen} title={I18n.t('kanji')} />
            <Scene key='kanjijlpt' component={KanjiByJLPTScreen} title={I18n.t('kanjijlpt')} />
            <Scene key='kanjiview' component={KanjiViewScreen} title={I18n.t('kanji')} />
            <Scene key='niteirukanji' component={NiteirukanjiScreen} title={I18n.t('niteirukanji')} />
            <Scene key='douonigigo' component={DouonigigoScreen} title={I18n.t('douonigigo')} />
            <Scene key='tango' component={TangoScreen} title={I18n.t('tango')} />
            <Scene key='bunpou' component={BunpouScreen} title={I18n.t('bunpou')} />
            <Scene key='settei' component={SetteiScreen} title={I18n.t('settei')} />
            <Scene key='flashcard' component={FlashCardScreen} title={I18n.t('flashcard')} />
            <Scene key='flashcardview' component={FlashCardViewScreen} title={I18n.t('flashcardview')} />
            <Scene key='search' component={SearchScreen} title='Search' />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
