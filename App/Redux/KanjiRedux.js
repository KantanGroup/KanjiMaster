import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  kanjiSearch: ['keyword'],
  kanjiReceive: ['kanji'],
  kanjiNotFound: null
})

export const KanjiTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
})

/* ------------- Reducers ------------- */

// request kanji
export const search = (state, action) =>
  state.merge({ keyword: action.keyword })

export const receive = (state, action) =>
  state.merge({ keyword: action.kanji.keyword, kanji: action.kanji })

export const notFound = (state, action) =>
  state.merge({ keyword: null, kanji: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.KANJI_SEARCH]: search,
  [Types.KANJI_RECEIVE]: receive,
  [Types.KANJI_NOT_FOUND]: notFound
})
