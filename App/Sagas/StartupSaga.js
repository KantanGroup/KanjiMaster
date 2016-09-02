import { take, put, select } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
import R from 'ramda'

import DatabaseService from '../Services/DatabaseService'

// process STARTUP actions
export function * watchStartup () {
  yield take(Types.STARTUP)
  const temp = yield select((state) => state.weather.temperature)

  importDatabaseKanji();
  importDatabaseKanjiTango();
  // only fetch new temps when we don't have one yet
  if (!R.is(Number, temp)) {
    yield put(Actions.requestTemperature('San Francisco'))
  }
}

function importDatabaseKanji() {
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

function importDatabaseKanjiTango() {
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
