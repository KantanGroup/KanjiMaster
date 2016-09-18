import { call, put, select } from 'redux-saga/effects'
import TemperatureActions from '../Redux/TemperatureRedux'
import { is } from 'ramda'
import { Actions as NavigationActions } from 'react-native-router-flux'

import RNFetchBlob from 'react-native-fetch-blob'
import Toast from 'react-native-root-toast';
import DatabaseService from '../Services/DatabaseService'
import KanjiService from '../Services/KanjiService'

// process STARTUP actions
export function * startup (action) {
  //If first install
  let setting = DatabaseService.getSetting("importSampleDatabase");
  if (!setting || (setting && (!setting[0] || !setting[0].value))) {
    //Go to setting screen to import database
    setTimeout(() => {
      NavigationActions.settei();
    }, 500);
  } else {
    //Alert using sample database to user
    Toast.show('You are using sample database');
  }
}

export function * initiativeDatabase (action) {
  let setting = DatabaseService.getSetting("importSampleDatabase");
  if (!setting || (setting && (!setting[0] || !setting[0].value))) {
    //Go to setting screen to import database
    yield call(importDatabaseKanji)
    yield call(importDatabaseKanjiTango)
    DatabaseService.setSetting("importSampleDatabase", true);
  } else {
    //Alert using sample database to user
    Toast.show('You are using sample database');
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
