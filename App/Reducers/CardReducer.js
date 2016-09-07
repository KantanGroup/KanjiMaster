import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

var empty = []

export const INITIAL_STATE = Immutable({
  card: {}
})

const receiveCard = (state, action) =>
  state.merge({
    card: action.card
  })

const receiveCards = (state, action) =>
  state.merge({
    card: action.card
  })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.CARD_RECEIVE]: receiveCard
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
