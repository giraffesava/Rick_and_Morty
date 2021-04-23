import { combineReducers } from 'redux'
import allEpisodesReducer from './allEpisodes/allEpisodes.reducer'

export const rootReducer = combineReducers({
  allEpisodesReducer,
})
