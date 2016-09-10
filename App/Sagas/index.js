import { takeLatest } from 'redux-saga'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugSettings from '../Config/DebugSettings'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { TemperatureTypes } from '../Redux/TemperatureRedux'
import { LoginTypes } from '../Redux/LoginRedux'
import { KanjiTypes } from '../Redux/KanjiRedux'
import { DeskTypes } from '../Redux/DeskRedux'
import { CardTypes } from '../Redux/CardRedux'

/* ------------- Sagas ------------- */

import { startup, initiativeDatabase } from './StartupSagas'
import { login } from './LoginSagas'
import { getTemperature } from './TemperatureSagas'
import { searchKanji } from './KanjiSagas'
import { createDesk, searchDesk, searchDesks, startStudyDesk } from './DeskSagas'
import { addCardToDesk, addKanjiToDesk, addWordToDesk, addGrammarToDesk } from './CardSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugSettings.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(StartupTypes.INITIATIVE_DATABASE, initiativeDatabase),
    takeLatest(LoginTypes.LOGIN_REQUEST, login),

    // some sagas receive extra parameters in addition to an action
    // takeLatest(TemperatureTypes.TEMPERATURE_REQUEST, getTemperature, api),

    //Kanji action
    takeLatest(KanjiTypes.KANJI_SEARCH, searchKanji),

    //Desk action
    takeLatest(DeskTypes.DESK_CREATE, createDesk),
    takeLatest(DeskTypes.DESK_SEARCH, searchDesk),
    takeLatest(DeskTypes.DESKS_SEARCH, searchDesks),
    takeLatest(DeskTypes.DESK_STUDY, startStudyDesk),

    //Card action
    takeLatest(CardTypes.CARD_ADD_TO_DESK, addCardToDesk),
    takeLatest(CardTypes.KANJI_ADD_TO_DESK, addKanjiToDesk),
    takeLatest(CardTypes.WORD_ADD_TO_DESK, addWordToDesk),
    takeLatest(CardTypes.GRAMMAR_ADD_TO_DESK, addGrammarToDesk)
  ]
}
