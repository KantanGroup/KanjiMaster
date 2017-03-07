import { put, select } from 'redux-saga/effects'
import GithubActions from '../Redux/GithubRedux'
import { is } from 'ramda'
import { Actions as NavigationActions } from 'react-native-router-flux'
import RNFetchBlob from 'react-native-fetch-blob'
import Toast from 'react-native-root-toast';
import DatabaseService from '../Services/DatabaseService'
import KanjiService from '../Services/KanjiService'
import GrammarService from '../Services/GrammarService'
// I18n
import I18n from 'react-native-i18n'

// exported to make available for tests

export const selectAvatar = (state) => state.github.avatar

// process STARTUP actions
export function * startup (action) {
  if (__DEV__ && console.tron) {
    // straight-up string logging
    console.tron.log('Hello, I\'m an example of how to log via Reactotron.')

    // logging an object for better clarity
    console.tron.log({
      message: 'pass objects for better logging',
      someGeneratorFunction: selectAvatar
    })

    // fully customized!
    const subObject = { a: 1, b: [1, 2, 3], c: true }
    subObject.circularDependency = subObject // osnap!
    console.tron.display({
      name: '🔥 IGNITE 🔥',
      preview: 'You should totally expand this',
      value: {
        '💃': 'Welcome to the future!',
        subObject,
        someInlineFunction: () => true,
        someGeneratorFunction: startup,
        someNormalFunction: selectAvatar
      }
    })
  }
  const avatar = yield select(selectAvatar)
  // only get if we don't have it yet
  if (!is(String, avatar)) {
    yield put(GithubActions.userRequest('GantMan'))
  }

  //If first install
  let setting = DatabaseService.getSetting("importSampleDatabase");
  if (!setting || (setting && (!setting[0] || !setting[0].value))) {
    //Go to setting screen to import database
    setTimeout(() => {
      NavigationActions.settei();
    }, 500);
  } else {
    //Alert using sample database to user
    Toast.show(I18n.t('youAreUsingSampleData'))
  }
}

export function * initiativeDatabase (action) {
  let setting = DatabaseService.getSetting("importSampleDatabase");
  if (!setting || (setting && (!setting[0] || !setting[0].value))) {
    //Go to setting screen to import database
    yield call(importDatabaseKanji)
    yield call(importDatabaseGrammar)
    yield call(importDatabaseKanjiTango)
    DatabaseService.setSetting("importSampleDatabase", true);
  } else {
    //Alert using sample database to user
    Toast.show(I18n.t('youAreUsingSampleData'))
  }
  setTimeout(() => {
    NavigationActions.startup();
  }, 100);
}

function * importDatabaseKanji () {
  const dirs = RNFetchBlob.fs.dirs
  console.log("Kanji do import database")
  RNFetchBlob.fs.readStream(dirs.DocumentDir + '/kanjimatome_with_meaning.json', 'utf8')
  .then((stream) => {
      let data = ''
      stream.open()
      stream.onData((chunk) => {
          data += chunk
      })
      stream.onEnd(() => {
          KanjiService.createKanjiMatomes(JSON.parse(data));
      })
  })
  .catch((err) => { console.log(err) })
  DatabaseService.setSetting("importDatabaseKanji", true);
}

function * importDatabaseKanjiTango() {
  const dirs = RNFetchBlob.fs.dirs
  console.log("Kanji tango do import database")
  RNFetchBlob.fs.readStream(dirs.DocumentDir + '/kanjimatome_tango.json', 'utf8')
  .then((stream) => {
      let data = ''
      stream.open()
      stream.onData((chunk) => {
          data += chunk
      })
      stream.onEnd(() => {
          KanjiService.createKanjiMatomeTangos(JSON.parse(data));
      })
  })
  .catch((err) => { console.log(err) })
  DatabaseService.setSetting("importDatabaseKanjiTango", true);
}

function * importDatabaseGrammar () {
  const dirs = RNFetchBlob.fs.dirs
  console.log("Grammar do import database")
  RNFetchBlob.fs.readStream(dirs.DocumentDir + '/grammars.json', 'utf8')
  .then((stream) => {
      let data = ''
      stream.open()
      stream.onData((chunk) => {
          data += chunk
      })
      stream.onEnd(() => {
          GrammarService.createGrammars(JSON.parse(data));
      })
  })
  .catch((err) => { console.log(err) })
  RNFetchBlob.fs.readStream(dirs.DocumentDir + '/tudienmaucau.json', 'utf8')
  .then((stream) => {
      let data = ''
      stream.open()
      stream.onData((chunk) => {
          data += chunk
      })
      stream.onEnd(() => {
          GrammarService.createGrammars(JSON.parse(data));
      })
  })
  .catch((err) => { console.log(err) })
  DatabaseService.setSetting("importDatabaseGrammar", true);
}
