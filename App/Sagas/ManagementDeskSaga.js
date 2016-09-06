import {take, call, put} from 'redux-saga/effects'
import R from 'ramda'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
import I18n from 'react-native-i18n'

import DatabaseService from '../Services/DatabaseService'

export default () => {
  function * receiveDesk (id) {
    try {
      // make the call to the api
      const desk = yield call(DatabaseService.getDesk, id)
      if (desk) {
        yield put(Actions.receiveDesk(desk))
      } else {
        yield put(Actions.receiveDeskNotFound())
      }
    } catch (error) {
      console.log(error)
      yield put(Actions.receiveDeskNotFound())
    }
  }

  function * searchDesk () {
    while (true) {
      const action = yield take(Types.DESK_SEARCH)
      const { id } = action
      yield call(receiveDesk, id)
    }
  }

  function * receiveDesks () {
    try {
      // make the call to the api
      const desks = yield call(DatabaseService.getDesks)
      if (desks) {
        yield put(Actions.receiveDesks(desks))
      } else {
        yield put(Actions.receiveDeskNotFound())
      }
    } catch (error) {
      console.log(error)
      yield put(Actions.receiveDeskNotFound())
    }
  }

  function * searchDesks () {
    while (true) {
      yield take(Types.DESKS_SEARCH)
      yield call(receiveDesks)
    }
  }

  return {
    searchDesk,
    searchDesks
  }
}
