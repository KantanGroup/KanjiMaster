import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    temperature: require('./TemperatureRedux').reducer,
    login: require('./LoginRedux').reducer,
    kanji: require('./KanjiRedux').reducer,
    desk: require('./DeskRedux').reducer,
    card: require('./CardRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
