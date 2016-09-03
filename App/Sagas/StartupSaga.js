import { take, put, call, select } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
import R from 'ramda'

import Toast from 'react-native-root-toast';
import DatabaseService from '../Services/DatabaseService'

// process STARTUP actions
export function * watchStartup () {
  yield take(Types.STARTUP)

  const temp = yield select((state) => state.weather.temperature)

  yield call(initiativeDatabase)

  // only fetch new temps when we don't have one yet
  if (!R.is(Number, temp)) {
    yield put(Actions.requestTemperature('San Francisco'))
  }
}

export function * initiativeDatabase () {
  //If first install
  let setting = DatabaseService.getSetting("importSampleDatabase");
  if (!setting || (setting && (!setting[0] || !setting[0].value))) {
    //Import sample Database
    Toast.show('Sample database is importing ....', {duration: 1000});
    yield call(importDatabaseKanji)
    yield call(importDatabaseKanjiTango)
    DatabaseService.setSetting("importSampleDatabase", true);
    //Alert using sample database to user
    Toast.show('Sample database have been imported ', {duration: 2000});
  } else {
    //Alert using sample database to user
    Toast.show('You are using sample database', {duration: 2000});
  }
}

export function * watchInitiativeDatabase () {
  // daemonize
  while (true) {
    // wait for LOGIN_ATTEMPT actions to arrive
    yield take(Types.INITIATIVE_DATABASE)
    // call attemptLogin to perform the actual work
    yield call(initiativeDatabase)
  }
}

export function * importDatabaseKanji () {
  let setting = DatabaseService.getSetting("importDatabaseKanji");
  if (!setting || (setting && (!setting[0] || !setting[0].value))) {
    console.log("Kanji do import database")
    const kanjimatomes = require('../Fixtures/kanjimatome_export.json')
    DatabaseService.createKanjiMatomes(kanjimatomes);
    DatabaseService.setSetting("importDatabaseKanji", true);
  } else {
    console.log("Kanji have been imported")
    //DatabaseService.setSetting("importDatabaseKanji", false);
    let allKanji = DatabaseService.getKanjiMatomes();
    console.log("Count kanji " + allKanji.length)
  }
}

export function * importDatabaseKanjiTango() {
  let setting = DatabaseService.getSetting("importDatabaseKanjiTango");
  if (!setting || (setting && (!setting[0] || !setting[0].value))) {
    console.log("Kanji tango do import database")
    let kanjiMatomeTangos = require('../Fixtures/kanjimatome_meanings_500.json')
    DatabaseService.createKanjiMatomeTangos(kanjiMatomeTangos);
    kanjiMatomeTangos = require('../Fixtures/kanjimatome_meanings_1000.json')
    DatabaseService.createKanjiMatomeTangos(kanjiMatomeTangos);
    DatabaseService.setSetting("importDatabaseKanjiTango", true);
  } else {
    console.log("Kanji tango have been imported")
    let allKanji = DatabaseService.getKanjiMatomeTangos();
    console.log("Count kanji tango" + allKanji.length)
  }
}
