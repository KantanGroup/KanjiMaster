import { take, put, select } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
import R from 'ramda'

import DatabaseService from '../Services/DatabaseService'

// process STARTUP actions
export function * watchStartup () {
  yield take(Types.STARTUP)
  const temp = yield select((state) => state.weather.temperature)

  let setting = DatabaseService.getSetting("importDatabaseKanji");
  if (setting) {
    const kanjimatomes = require('../Fixtures/kanjimatome_export.json')
    //console.log(kanjimatomes[0])
    DatabaseService.createKanjiMatome(kanjimatomes[0]);
    /*
    kanjimatomes.map((kanjimatome) => {
      DatabaseService.createKanjiMatome(kanjimatome);
    })
    //*/
    //DatabaseService.createKanjiMatomes(kanjimatomes);
  } else {

  }

  // only fetch new temps when we don't have one yet
  if (!R.is(Number, temp)) {
    yield put(Actions.requestTemperature('San Francisco'))
  }
}
