import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

var empty = []

export const INITIAL_STATE = Immutable({
  id: null,
  desk: {},
  desks: []
})

// request kanji
const search = (state, action) =>
  state.merge({
    id: action.id
  })

const receiveDesk = (state, action) =>
  state.merge({
    id: action.desk.id,
    desk: action.desk
  })

const receiveDesks = (state, action) =>
  state.merge({
    desks: action.desks
  })

const notFound = (state, action) =>
  state.merge({
    id: null,
    desks: []
  })

const countCard = (state, action) =>
  state.merge({
    countNewCard: action.countNewCard,
    countDoingCard: action.countDoingCard,
    countReviewCard: action.countReviewCard
  })


// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.DESK_SEARCH]: search,
  [Types.DESK_RECEIVE]: receiveDesk,
  [Types.DESKS_RECEIVE]: receiveDesks,
  [Types.DESK_NOT_FOUND]: notFound,
  [Types.DESK_CARD_COUNT]: countCard
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
