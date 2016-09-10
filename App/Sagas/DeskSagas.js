import {call, put} from 'redux-saga/effects'
import R from 'ramda'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
import I18n from 'react-native-i18n'

import moment from 'moment'
import Toast from 'react-native-root-toast';
import DeskActions from '../Redux/DeskRedux'
import CardActions from '../Redux/CardRedux'
import DatabaseService from '../Services/DatabaseService'
import LeitnerSystem from '../LeitnerSystem/LeitnerSystem'

export function * searchDesk (action) {
  const { id } = action
  try {
    const desk = yield call(DatabaseService.getDesk, id)
    if (desk) {
      yield put(DeskActions.deskReceive(desk))
    } else {
      yield put(DeskActions.deskNotFound())
    }
  } catch (error) {
    Toast.show(error)
    yield put(Actions.deskNotFound())
  }
}

export function * searchDesks () {
  try {
    const desks = yield call(DatabaseService.getDesks)
    if (desks) {
      yield put(DeskActions.desksReceive(desks))
    } else {
      yield put(DeskActions.deskNotFound())
    }
  } catch (error) {
    Toast.show(error)
    yield put(ActiDeskActionsons.deskNotFound())
  }
}

export function * createDesk (action) {
  const { name } = action
  try {
    yield call(DatabaseService.createDesk, name)
    // make the call to the api
    const desks = yield call(DatabaseService.getDesks)
    if (desks) {
      yield put(DeskActions.desksReceive(desks))
    } else {
      yield put(DeskActions.deskNotFound())
    }
  } catch (error) {
    Toast.show(error)
    yield put(DeskActions.deskNotFound())
  }
}

export function * startStudyDesk (action) {
  const { id } = action
  try {
    const newCards = yield call(DatabaseService.getCardInDeskByNewCard, id, -1)
    yield put(CardActions.cardNewInDayReceive(newCards, moment(new Date()).format("YYYYMMDD")))

    const reviewCards = yield call(DatabaseService.getCardInDeskByReviewCard, id, -1)
    yield put(CardActions.cardReviewInDayReceive(reviewCards, moment(new Date()).format("YYYYMMDD")))

    LeitnerSystem.startStudy(newCards, reviewCards);
    yield put(DeskActions.deskCountCard(LeitnerSystem.countNewCard(), LeitnerSystem.countDoingCard(), LeitnerSystem.countReviewCard()));
  } catch (error) {
    Toast.show(error)
    yield put(DeskActions.deskNotFound())
  }
}
