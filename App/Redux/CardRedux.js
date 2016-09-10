import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  cardAddToDesk: ['id', 'front', 'back', 'type'],
  cardReceive: ['card'],
  cardsReceive: ['cards'],
  cardNewInDayReceive: ['cards', 'date'],
  cardReviewInDayReceive: ['cards', 'date']
})

export const CardTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
})

/* ------------- Reducers ------------- */

export const addCard = (state, action) =>
  state.merge({ id: action.id, front: action.front, back: action.back, type: action.type })

export const receiveCard = (state, action) =>
  state.merge({ card: action.card })

export const receiveCards = (state, action) =>
  state.merge({ cards: action.cards })

export const receiveNewCardInDay = (state, action) =>
  state.merge({ newCardInDay: action.cards, newDay: action.date })

export const receiveReviewCardInDay = (state, action) =>
  state.merge({ reviewCardInDay: action.cards, reviewDay: action.date })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CARD_ADD_TO_DESK]: addCard,
  [Types.CARD_RECEIVE]: receiveCard,
  [Types.CARDS_RECEIVE]: receiveCards,
  [Types.CARD_NEW_INDDAY_RECEIVE]: receiveNewCardInDay,
  [Types.CARD_REVIEW_INDDAY_RECEIVE]: receiveReviewCardInDay
})
