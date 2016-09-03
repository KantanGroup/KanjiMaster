import React, { Component } from 'react'
import { ToastAndroid, BackAndroid, View } from 'react-native'
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
import I18n from 'react-native-i18n'

import FlashCardOptions from '../Components/FlashCardOptions'
/***************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

backButtonPressedOnceToExit = false;

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
            <Scene initial key='startup' component={StartupScreen} renderLeftButton={NavItems.hamburgerButton} renderRightButton={() => <FlashCardOptions />}/>
            <Scene key='kanji' component={KanjiScreen} title={I18n.t('kanji')} renderRightButton={() => <FlashCardOptions />}/>
            <Scene key='kanjijlpt' component={KanjiByJLPTScreen} title={I18n.t('kanjijlpt')} renderRightButton={() => <FlashCardOptions />}/>
            <Scene key='kanjiview' component={KanjiViewScreen} title={I18n.t('kanji')} renderRightButton={() => <FlashCardOptions />}/>
            <Scene key='niteirukanji' component={NiteirukanjiScreen} title={I18n.t('niteirukanji')} renderRightButton={() => <FlashCardOptions />}/>
            <Scene key='douonigigo' component={DouonigigoScreen} title={I18n.t('douonigigo')} renderRightButton={() => <FlashCardOptions />}/>
            <Scene key='tango' component={TangoScreen} title={I18n.t('tango')} renderRightButton={() => <FlashCardOptions />}/>
            <Scene key='bunpou' component={BunpouScreen} title={I18n.t('bunpou')} renderRightButton={() => <FlashCardOptions />}/>
            <Scene key='settei' component={SetteiScreen} title={I18n.t('settei')} renderRightButton={() => <FlashCardOptions />}/>
            <Scene key='flashcard' component={FlashCardScreen} title={I18n.t('flashcard')} renderRightButton={() => <FlashCardOptions />} onRight={() => alert('Right button')}/>
            <Scene key='flashcardview' component={FlashCardViewScreen} title={I18n.t('flashcardview')} renderRightButton={() => <FlashCardOptions />}/>
            <Scene key='search' component={SearchScreen} title='Search' renderRightButton={() => <FlashCardOptions />}/>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
