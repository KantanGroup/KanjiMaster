// A list of all actions in the system.
import { createTypes } from 'reduxsauce'

export default createTypes(`
  LOGIN_ATTEMPT
  LOGIN_SUCCESS
  LOGIN_FAILURE

  LOGOUT

  STARTUP

  TEMPERATURE_REQUEST
  TEMPERATURE_RECEIVE
  TEMPERATURE_FAILURE

  INITIATIVE_DATABASE

  KANJI_SEARCH
  KANJI_RECEIVE
  KANJI_NOT_FOUND

  CARD_ADD_TO_DESK
  CARDS_ADD_TO_DESK
  CARD_RECEIVE
  CARDS_RECEIVE
  CARD_STUDY

  DESK_CREATE
  DESK_SEARCH
  DESK_RECEIVE
  DESKS_SEARCH
  DESKS_RECEIVE
  DESK_NOT_FOUND
`)
