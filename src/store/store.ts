import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import { requestWatcher } from './allEpisodes/allEpisodes.saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getCharactersWatcher } from './characters/characters.saga'
import { inputEpisodeWatcher } from './inputEpisode/inputEpisode.saga'
import { episodeFilterWatcher } from './episodeFilter/episodeFilter.saga'
import { locationWatcher } from './location/location.saga'

export const initStore = (): any => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  )
  sagaMiddleware.run(requestWatcher)
  sagaMiddleware.run(getCharactersWatcher)
  sagaMiddleware.run(inputEpisodeWatcher)
  sagaMiddleware.run(episodeFilterWatcher)
  sagaMiddleware.run(locationWatcher)
  return store
}
