import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    github: require('./GithubRedux').reducer,
    login: require('./LoginRedux').reducer,
    search: require('./SearchRedux').reducer,
    kanji: require('./KanjiRedux').reducer,
    desk: require('./DeskRedux').reducer,
    card: require('./CardRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
