import {take, call, put, select} from 'redux-saga/effects'
import R from 'ramda'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
import I18n from 'react-native-i18n'

import moment from 'moment'
import Toast from 'react-native-root-toast';

import DatabaseService from '../Services/DatabaseService'
import LeitnerSystem from '../LeitnerSystem/LeitnerSystem'

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

  function * startStudyDesk () {
    while (true) {
      const action = yield take(Types.DESK_STUDY_START)
      const { deskId } = action

      try {
        const newCards = yield call(DatabaseService.getCardInDeskByNewCard, deskId, -1)
        yield put(Actions.receiveNewCardInDay(newCards, moment(new Date()).format("YYYYMMDD")))

        const reviewCards = yield call(DatabaseService.getCardInDeskByReviewCard, deskId, -1)
        yield put(Actions.receiveReviewCardInDay(reviewCards, moment(new Date()).format("YYYYMMDD")))

        LeitnerSystem.startStudy(newCards, reviewCards);
        yield put(Actions.countCard(LeitnerSystem.countNewCard(), LeitnerSystem.countDoingCard(), LeitnerSystem.countReviewCard()));
      } catch (error) {
        Toast.show(error)
      }
    }
  }

  return {
    addCardToDesk,
    addCardsToDesk,
    startStudyDesk
  }
}
