import { take, put, select } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
import R from 'ramda'

import DatabaseService from '../Services/DatabaseService'

// process STARTUP actions
export function * watchStartup () {
  yield take(Types.STARTUP)
  const temp = yield select((state) => state.weather.temperature)

  importDatabase();

  // only fetch new temps when we don't have one yet
  if (!R.is(Number, temp)) {
    yield put(Actions.requestTemperature('San Francisco'))
  }
}

function importDatabase() {
  let setting = DatabaseService.getSetting("importDatabaseKanji");
  if (!setting || (setting && (!setting[0] || !setting[0].value))) {
    console.log("Do import database")
    const kanjimatomes = require('../Fixtures/kanjimatome_export.json')
    DatabaseService.createKanjiMatomes(kanjimatomes);
    DatabaseService.setSetting("importDatabaseKanji", true);
  } else {
    console.log("Have been imported")
    //DatabaseService.setSetting("importDatabaseKanji", false);
    let allKanji = DatabaseService.getKanjiMatomes();
    console.log("Count kanji " + allKanji.length)
  }
}
