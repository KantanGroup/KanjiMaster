import Types from './Types'

const attemptLogin = (username, password) =>
  ({ type: Types.LOGIN_ATTEMPT, username, password })

const loginSuccess = (username) =>
  ({ type: Types.LOGIN_SUCCESS, username })

const loginFailure = (errorCode) =>
  ({ type: Types.LOGIN_FAILURE, errorCode })

const logout = () => ({ type: Types.LOGOUT })

const startup = () => ({ type: Types.STARTUP })

const requestTemperature = (city) => ({ type: Types.TEMPERATURE_REQUEST, city })
const receiveTemperature = (temperature) => ({ type: Types.TEMPERATURE_RECEIVE, temperature })
const receiveTemperatureFailure = () => ({ type: Types.TEMPERATURE_FAILURE })

const initiativeDatabase = () => ({ type: Types.INITIATIVE_DATABASE})

const searchKanji = (keyword) =>  ({ type: Types.KANJI_SEARCH, keyword })
const receiveKanji = (kanji) =>　({ type: Types.KANJI_RECEIVE, kanji })
const receiveKanjiNotFound = () =>　({ type: type.KANJI_NOT_FOUND })

const addCardToDesk = (deskId, keyword, type) =>  ({ type: Types.CARD_ADD_TO_DESK, deskId, keyword, type })
const addCardsToDesk = (deskId, keywords, type) =>  ({ type: Types.CARDS_ADD_TO_DESK, deskId, keywords, type })
const receiveCard = (card) =>　({ type: Types.CARD_RECEIVE, card })
const receiveCards = (cards) =>　({ type: Types.CARDS_RECEIVE, cards })
const receiveNewCardInDay = (cards, date) =>　({ type: Types.CARD_NEW_INDDAY_RECEIVE, cards , date})
const receiveReviewCardInDay = (cards, date) =>　({ type: Types.CARD_REVIEW_INDDAY_RECEIVE, cards , date})
const getStudyCards = (deskId) =>　({ type: Types.CARD_STUDY, deskId })

const createDesk = (name) =>  ({ type: Types.DESK_CREATE, name })
const searchDesk = (id) =>  ({ type: Types.DESK_SEARCH, id })
const receiveDesk = (desk) =>　({ type: Types.DESK_RECEIVE, desk })
const searchDesks = () =>　({ type: Types.DESKS_SEARCH })
const receiveDesks = (desks) =>　({ type: Types.DESKS_RECEIVE, desks })
const receiveDeskNotFound = () =>　({ type: type.DESK_NOT_FOUND })

/**
 Makes available all the action creators we've created.
 */
export default {
  attemptLogin,
  loginSuccess,
  loginFailure,
  logout,
  startup,
  requestTemperature,
  receiveTemperature,
  receiveTemperatureFailure,
  initiativeDatabase,
  searchKanji,
  receiveKanji,
  receiveKanjiNotFound,
  createDesk,
  addCardToDesk,
  addCardsToDesk,
  receiveCard,
  receiveCards,
  receiveNewCardInDay,
  receiveReviewCardInDay,
  getStudyCards,
  searchDesk,
  receiveDesk,
  searchDesks,
  receiveDesks,
  receiveDeskNotFound
}
