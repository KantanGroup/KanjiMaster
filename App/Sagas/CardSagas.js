import {call, put} from 'redux-saga/effects'
import R from 'ramda'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
import I18n from 'react-native-i18n'

import Toast from 'react-native-root-toast';

import CardActions from '../Redux/CardRedux'
import DatabaseService from '../Services/DatabaseService'

export function * addCardToDesk (action) {
  const { id, front, back, type } = action
  try {
    const hasCard = yield call(DatabaseService.hasCardInDesk, id, front, type)
    if (!hasCard) {
      DatabaseService.addCard(id, front, back, type)
      Toast.show("Add successful")
    } else {
      Toast.show("Have been added to desk")
    }
    const cards = yield call(DatabaseService.getCardInDesk, id)
    yield put(CardActions.cardReceive(cards))
  } catch (error) {
    Toast.show(error)
  }
}
