import { combineReducers } from 'redux'
import reducer from './allEpisodes/allEpisodes.reducer'

export const rootReducer = combineReducers({
  allEpisodes: reducer,
})
