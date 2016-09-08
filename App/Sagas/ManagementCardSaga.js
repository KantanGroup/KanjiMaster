import {take, call, put} from 'redux-saga/effects'
import R from 'ramda'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
import I18n from 'react-native-i18n'

import Toast from 'react-native-root-toast';

import DatabaseService from '../Services/DatabaseService'

export default () => {
  function * addCardToDesk () {
    while (true) {
      const action = yield take(Types.CARD_ADD_TO_DESK)
      const { deskId, keyword, type } = action

      try {
        const hasCard = yield call(DatabaseService.hasCardInDesk, deskId, keyword, type)
        if (!hasCard) {
          DatabaseService.addCard(deskId, keyword, 0)
          Toast.show("Add successful")
        } else {
          Toast.show("Have been added to desk")
        }
        const cards = yield call(DatabaseService.getCardInDesk, deskId, 0, 2)
        yield put(Actions.receiveCard(cards))
      } catch (error) {
        Toast.show(error)
      }
    }
  }

  function * addCardsToDesk () {
    while (true) {
      const action = yield take(Types.CARDS_ADD_TO_DESK)
      const { deskId, keywords, type } = action

      yield call(DatabaseService.addCards, deskId, keywords, type)
    }
  }

  function * getStudyCards () {
    while (true) {
      const action = yield take(Types.CARD_STUDY)
      const { deskId } = action

      const cards = yield call(DatabaseService.getCards, deskId)
      yield put(Actions.receiveCard(cards))
    }
  }

  return {
    addCardToDesk,
    addCardsToDesk,
    getStudyCards
  }
}
