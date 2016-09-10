import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  deskCreate: ['name'],
  deskSearch: ['id'],
  desksSearch: null,
  deskStudy: ['id'],
  deskReceive: ['desk'],
  desksReceive: ['desks'],
  deskCountCard: ['countNewCard', 'countDoingCard', 'countReviewCard'],
  deskNotFound: null
})

export const DeskTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  desks: {}
})

/* ------------- Reducers ------------- */

export const createDesk = (state, action) =>
  state.merge({ name: action.name })

export const studyDesk = (state, action) =>
  state.merge({ id: action.id })

export const searchDesk = (state, action) =>
  state.merge({ id: action.id })

export const receiveDesk = (state, action) =>
  state.merge({ id: action.desk.id, desk: action.desk })

export const receiveDesks = (state, action) =>
  state.merge({ desks: action.desks })

export const notFound = (state, action) =>
  state.merge({ id: null, desks: null })

export const countCard = (state, action) =>
  state.merge({ countNewCard: action.countNewCard, countDoingCard: action.countDoingCard, countReviewCard: action.countReviewCard })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DESK_CREATE]: createDesk,
  [Types.DESK_STUDY]: studyDesk,
  [Types.DESK_SEARCH]: searchDesk,
  [Types.DESK_RECEIVE]: receiveDesk,
  [Types.DESKS_RECEIVE]: receiveDesks,
  [Types.DESK_NOT_FOUND]: notFound,
  [Types.DESK_COUNT_CARD]: countCard
})
