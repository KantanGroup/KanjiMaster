import { fork } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import { watchStartup, watchInitiativeDatabase } from './StartupSaga'
import { watchLoginAttempt } from './LoginSaga'
import getCityWeather from './GetCityWeatherSaga'
import searchKanjiSaga from './SearchKanjiSaga'
import managementDeskSaga from './ManagementDeskSaga'
import managementCardSaga from './ManagementCardSaga'
import DebugSettings from '../Config/DebugSettings'

// Create our API at this level and feed it into
// the sagas that are expected to make API calls
// so there's only 1 copy app-wide!
// const api = API.create()
const api = DebugSettings.useFixtures ? FixtureAPI : API.create()

// start the daemons
export default function * root () {
  yield fork(watchStartup)
  yield fork(watchLoginAttempt)
  yield fork(watchInitiativeDatabase)
  yield fork(getCityWeather(api).watcher)
  yield fork(searchKanjiSaga().watcher)
  yield fork(managementCardSaga().addCardToDesk)
  yield fork(managementCardSaga().addCardsToDesk)
  yield fork(managementCardSaga().startStudyDesk)
  yield fork(managementDeskSaga().createDesk)
  yield fork(managementDeskSaga().searchDesk)
  yield fork(managementDeskSaga().searchDesks)
}
