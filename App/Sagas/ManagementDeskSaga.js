import {take, call, put} from 'redux-saga/effects'
import R from 'ramda'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
import I18n from 'react-native-i18n'

import Toast from 'react-native-root-toast';

import DatabaseService from '../Services/DatabaseService'

export default () => {
  function * searchDesk () {
    while (true) {
      const action = yield take(Types.DESK_SEARCH)
      const { id } = action

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
  }

  function * searchDesks () {
    while (true) {
      yield take(Types.DESKS_SEARCH)

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
  }

  function * createDesk () {
    while (true) {
      const action = yield take(Types.DESK_CREATE)
      const { name } = action

      try {
        yield call(DatabaseService.createDesk, name)
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
  }

  return {
    searchDesk,
    searchDesks,
    createDesk
  }
}
