import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  cardAddToDesk: ['deskId', 'front', 'back', 'type'],
  kanjiAddToDesk: ['deskId', 'front'],
  wordAddToDesk: ['deskId', 'front'],
  grammarAddToDesk: ['deskId', 'front'],
  cardReceive: ['card'],
  cardsReceive: ['cards'],
  cardNewInDayReceive: ['cards', 'date'],
  cardReviewInDayReceive: ['cards', 'date'],
  cardInQueue: ['front', 'back'],
  cardEmptyInQueue: null
})

export const CardTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
})

/* ------------- Reducers ------------- */

export const addSimpleCard = (state, action) =>
  state.merge({ deskId: action.deskId, front: action.front})

export const addFrontBackCard = (state, action) =>
  state.merge({ deskId: action.deskId, front: action.front, back: action.back, type: action.type })

export const receiveCard = (state, action) =>
  state.merge({ card: action.card })

export const receiveCards = (state, action) =>
  state.merge({ cards: action.cards })

export const receiveNewCardInDay = (state, action) =>
  state.merge({ newCardInDay: action.cards, newDay: action.date })

export const receiveReviewCardInDay = (state, action) =>
  state.merge({ reviewCardInDay: action.cards, reviewDay: action.date })

export const getCardInQueue = (state, action) =>
  state.merge({ cardFront: action.front, cardBack: action.back })

export const emptyCardInQueue = (state, action) =>
  state.merge({ cardFront: null, cardBack: null })
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CARD_ADD_TO_DESK]: addFrontBackCard,
  [Types.KANJI_ADD_TO_DESK]: addSimpleCard,
  [Types.WORD_ADD_TO_DESK]: addSimpleCard,
  [Types.GRAMMAR_ADD_TO_DESK]: addSimpleCard,
  [Types.CARD_RECEIVE]: receiveCard,
  [Types.CARDS_RECEIVE]: receiveCards,
  [Types.CARD_NEW_INDDAY_RECEIVE]: receiveNewCardInDay,
  [Types.CARD_REVIEW_INDDAY_RECEIVE]: receiveReviewCardInDay,
  [Types.CARD_IN_QUEUE]: getCardInQueue,
  [Types.CARD_EMPTY_IN_QUEUE]: emptyCardInQueue
})
