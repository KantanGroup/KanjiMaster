import {call, put} from 'redux-saga/effects'
import R from 'ramda'
import I18n from 'react-native-i18n'

import Toast from 'react-native-root-toast';

import CardSagas from './CardSagas'
import CardActions from '../Redux/CardRedux'
import KanjiService from '../Services/KanjiService'
import DatabaseService from '../Services/DatabaseService'
import Constant from '../Transforms/Constant'

export function * addCardToDesk (action) {
  const { deskId, front, back, type } = action
  yield call(addToDesk, deskId, front, back, type)
}

export function * addKanjiToDesk (action) {
  const { deskId, front } = action
  yield call(addToDesk, deskId, front, null, Constant.TYPE_KANJI)
}

export function * addWordToDesk (action) {
  const { deskId, front } = action
  yield call(addToDesk, deskId, front, null, Constant.TYPE_WORD)
}

export function * addGrammarToDesk (action) {
  const { deskId, front } = action
  yield call(addToDesk, deskId, front, null, Constant.TYPE_GRAMMAR)
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

export function * addKanjiByPropertyCard (action) {
  const { deskId, property } = action
  try {
    let keywords = [];
    switch (property) {
      case 'n5':
        const n5Kanjis = yield call(KanjiService.getKanjiMatomeByJLPT, 5)
        n5Kanjis.map((kanji) => {
          keywords.push(kanji.keyword)
        })
        break;
      case 'n4':
        const n4Kanjis = yield call(KanjiService.getKanjiMatomeByJLPT, 4)
        n4Kanjis.map((kanji) => {
          keywords.push(kanji.keyword)
        })
        break;
      case 'n3':
        const n3Kanjis = yield call(KanjiService.getKanjiMatomeByJLPT, 3)
        n3Kanjis.map((kanji) => {
          keywords.push(kanji.keyword)
        })
        break;
      case 'n2':
        const n2Kanjis = yield call(KanjiService.getKanjiMatomeByJLPT, 2)
        n2Kanjis.map((kanji) => {
          keywords.push(kanji.keyword)
        })
        break;
      case 'n1':
        const n1Kanjis = yield call(KanjiService.getKanjiMatomeByJLPT, 1)
        n1Kanjis.map((kanji) => {
          keywords.push(kanji.keyword)
        })
        break;
      default:
        const allKanjis = yield call(KanjiService.getKanjiMatomes)
        allKanjis.map((kanji) => {
          keywords.push(kanji.keyword)
        })
    }
    yield call(DatabaseService.addCards, deskId, keywords, null, Constant.TYPE_KANJI)
  } catch (error) {
    Toast.show("Can't add to desk")
    console.log(error)
  }

  //*/
}
