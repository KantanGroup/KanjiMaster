import {call, put} from 'redux-saga/effects'
import R from 'ramda'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
import I18n from 'react-native-i18n'

import Toast from 'react-native-root-toast';

import CardActions from '../Redux/CardRedux'
import DatabaseService from '../Services/DatabaseService'

export const TYPE_OTHER = 0
export const TYPE_KANJI = 1;
export const TYPE_WORD = 2;
export const TYPE_GRAMMAR = 3;

export function * addCardToDesk (action) {
  const { deskId, front, back, type } = action
  yield call(addToDesk, deskId, front, back, type)
}

export function * addKanjiToDesk (action) {
  const { deskId, front } = action
  yield call(addToDesk, deskId, front, null, TYPE_KANJI)
}

export function * addWordToDesk (action) {
  const { deskId, front } = action
  yield call(addToDesk, deskId, front, null, TYPE_WORD)
}

export function * addGrammarToDesk (action) {
  const { deskId, front } = action
  yield call(addToDesk, deskId, front, null, TYPE_GRAMMAR)
}

export function * addToDesk (deskId, front, back, type) {
  try {
    const hasCard = yield call(DatabaseService.hasCardInDesk, deskId, front, type)
    if (!hasCard) {
      DatabaseService.addCard(deskId, front, back, type)
      Toast.show("Add successful")
    } else {
      Toast.show("Have been added to desk")
    }
  } catch (error) {
    Toast.show("Can't add to desk")
    console.log(error)
  }
}
