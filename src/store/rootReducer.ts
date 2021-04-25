import { combineReducers } from 'redux'
import allEpisodesReducer from './allEpisodes/allEpisodes.reducer'
import charactersReducer from './characters/characters.reducer'
import inputEpisodeReducer from './inputEpisode/inputEpisode.reducer'
import episodeFilterReducer from './episodeFilter/episodeFilter.reducer'
import buttonReducer from './button/button.reducer'

export const rootReducer = combineReducers({
  allEpisodesReducer,
  charactersReducer,
  inputEpisodeReducer,
  episodeFilterReducer,
  buttonReducer,
})
