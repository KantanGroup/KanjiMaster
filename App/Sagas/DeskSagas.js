import {call, put} from 'redux-saga/effects'
import R from 'ramda'
import I18n from 'react-native-i18n'

import moment from 'moment'
import Toast from 'react-native-root-toast';
import DeskActions from '../Redux/DeskRedux'
import CardActions from '../Redux/CardRedux'
import KanjiService from '../Services/KanjiService'
import DatabaseService from '../Services/DatabaseService'
import LeitnerSystem from '../LeitnerSystem/LeitnerSystem'
import Constant from '../Transforms/Constant'

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
  const { id, name } = action
  try {
    yield call(DatabaseService.createDesk, id, name)
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

    yield call(getNextCard)
  } catch (error) {
    Toast.show("Can't study this desk")
    console.log(error)
    yield put(DeskActions.deskNotFound())
    yield put(CardActions.cardEmptyInQueue())
  }
}

export function * feedbackCard(action) {
  const { card } = action
  try {
    const cardAgain = LeitnerSystem.feedbackAgain(card);
    const cardHard = LeitnerSystem.feedbackHard(card);
    const cardGood = LeitnerSystem.feedbackGood(card);
    const cardEasy = LeitnerSystem.feedbackEasy(card);
    yield put(DeskActions.deskReceiveFeedbackCard(cardAgain, cardHard, cardGood, cardEasy));
  } catch (error) {
    Toast.show("Can't answer this card")
    console.log(error)
  }
}

export function * updateCard(action) {
  const { card, relearning } = action
  try {

    yield call(DatabaseService.updateCard, card);
    if (relearning) {
      yield call(LeitnerSystem.addCard, card);
    }
  } catch (error) {
    Toast.show("Can't answer this card")
    console.log(error)
  }

  yield call(getNextCard)
}

export function * deleteDesk(action) {
  const { id } = action
  try {
    yield call(DatabaseService.deleteDesk, id);
    const desks = yield call(DatabaseService.getDesks)
    if (desks) {
      yield put(DeskActions.desksReceive(desks))
    } else {
      yield put(DeskActions.deskNotFound())
    }
  } catch (error) {
    Toast.show("Can't delete desk")
    console.log(error)
  }
}

function * getNextCard() {
  const nextCard = yield call(LeitnerSystem.nextCard);
  if (nextCard) {
    switch (nextCard.type) {
      case Constant.TYPE_KANJI:
        let kanjis = KanjiService.getKanjiMatome(nextCard.front);
        let cardFront = {};
        cardFront.word = kanjis[0].keyword;
        cardFront.topDefinition = kanjis[0].hantu;
        cardFront.bottomDefinition = kanjis[0].definition;

        // Get kanji information
        const kanjiContent = kanjis[0];

        // Get list of word via kanji
        let cardBack = {};
        cardBack.kanjiContent = kanjiContent;
        cardBack.tangos = {};
        yield put(CardActions.cardInQueue(nextCard, cardFront, cardBack))
        break;
      case Constant.TYPE_KANJI:

        break;
      case Constant.TYPE_KANJI:

        break;
      default:
        yield put(CardActions.cardInQueue(nextCard, null, null))
    }
  } else {
    yield put(CardActions.cardEmptyInQueue())
  }
}
