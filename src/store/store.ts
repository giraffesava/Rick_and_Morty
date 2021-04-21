import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import { requestWatcher } from './allEpisodes/allEpisodes.saga'
import { composeWithDevTools } from 'redux-devtools-extension'

export const initStore = (): any => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  )
  sagaMiddleware.run(requestWatcher)
  return store
}
