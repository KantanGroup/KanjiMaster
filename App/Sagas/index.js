import { takeLatest } from 'redux-saga'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'
import { LoginTypes } from '../Redux/LoginRedux'
import { OpenScreenTypes } from '../Redux/OpenScreenRedux'
import { KanjiTypes } from '../Redux/KanjiRedux'
import { DeskTypes } from '../Redux/DeskRedux'
import { CardTypes } from '../Redux/CardRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login } from './LoginSagas'
import { getUserAvatar } from './GithubSagas'
import { openScreen } from './OpenScreenSagas'
import { searchKanji } from './KanjiSagas'
import { createDesk, searchDesk, searchDesks, startStudyDesk, feedbackCard, updateCard, deleteDesk } from './DeskSagas'
import { addCardToDesk, addKanjiToDesk, addWordToDesk, addGrammarToDesk, addKanjiByPropertyCard } from './CardSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(StartupTypes.INITIATIVE_DATABASE, initiativeDatabase),
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    takeLatest(OpenScreenTypes.OPEN_SCREEN, openScreen),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),
    //Kanji action
    takeLatest(KanjiTypes.KANJI_SEARCH, searchKanji),

    //Desk action
    takeLatest(DeskTypes.DESK_CREATE, createDesk),
    takeLatest(DeskTypes.DESK_SEARCH, searchDesk),
    takeLatest(DeskTypes.DESKS_SEARCH, searchDesks),
    takeLatest(DeskTypes.DESK_STUDY, startStudyDesk),
    takeLatest(DeskTypes.DESK_DELETE, deleteDesk),

    takeLatest(DeskTypes.DESK_FEEDBACK_TO_CARD, feedbackCard),
    takeLatest(DeskTypes.DESK_UPDATE_CARD, updateCard),

    //Card action
    takeLatest(CardTypes.CARD_ADD_TO_DESK, addCardToDesk),
    takeLatest(CardTypes.KANJI_ADD_TO_DESK, addKanjiToDesk),
    takeLatest(CardTypes.KANJI_BY_PROPERTY_ADD_TO_DESK, addKanjiByPropertyCard),
    takeLatest(CardTypes.WORD_ADD_TO_DESK, addWordToDesk),
    takeLatest(CardTypes.GRAMMAR_ADD_TO_DESK, addGrammarToDesk)
  ]
}
