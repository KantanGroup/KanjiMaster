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

  function * requestCreateDesk (name) {
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

  function * createDesk () {
    while (true) {
      const action = yield take(Types.DESK_CREATE)
      const { name } = action
      yield call(requestCreateDesk, name)
    }
  }

  function * requestAddCardToDesk (deskId, keyword, type) {
    yield call(DatabaseService.addCard, deskId, keyword, type)
  }

  function * addCardToDesk () {
    while (true) {
      const action = yield take(Types.DESK_ADD_CARD)
      const { deskId, keyword, type } = action
      yield call(requestAddCardToDesk, deskId, keyword, type)
    }
  }

  function * requestAddCardsToDesk (deskId, keywords, type) {
    yield call(DatabaseService.addCards, deskId, keywords, type)
  }

  function * addCardsToDesk () {
    while (true) {
      const action = yield take(Types.DESK_ADD_CARDS)
      const { deskId, keywords, type } = action
      yield call(requestAddCardsToDesk, deskId, keywords, type)
    }
  }

  return {
    searchDesk,
    searchDesks,
    createDesk,
    addCardToDesk,
    addCardsToDesk
  }
}
