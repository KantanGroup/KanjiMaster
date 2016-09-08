import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

var empty = []

export const INITIAL_STATE = Immutable({

})

const receiveCard = (state, action) =>
  state.merge({
    card: action.card
  })

const receiveCards = (state, action) =>
  state.merge({
    cards: action.cards
  })

const receiveNewCardInDay = (state, action) =>
  state.merge({
    newCardInDay: action.cards,
    newDay: action.date
  })

const receiveReviewCardInDay = (state, action) =>
  state.merge({
    reviewCardInDay: action.cards,
    reviewDay: action.date
  })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.CARD_RECEIVE]: receiveCard,
  [Types.CARD_NEW_INDDAY_RECEIVE]: receiveNewCardInDay,
  [Types.CARD_REVIEW_INDDAY_RECEIVE]: receiveReviewCardInDay
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
