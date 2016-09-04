import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

var empty = []

export const INITIAL_STATE = Immutable({
  keyword: null,
  kanji: {}
})

// request kanji
const search = (state, action) =>
  state.merge({
    keyword: action.keyword,
    kanji: {}
  })

const result = (state, action) =>
  state.merge({
    keyword: action.kanji.keyword,
    kanji: action.kanji
  })

const notFound = (state, action) =>
  state.merge({
    keyword: 'Kanji not found',
    kanji: {}
  })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.KANJI_SEARCH]: search,
  [Types.KANJI_RECEIVE]: result,
  [Types.KANJI_NOT_FOUND]: notFound
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
