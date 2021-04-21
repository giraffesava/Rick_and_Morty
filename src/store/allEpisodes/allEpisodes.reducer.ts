import { AllEpisodesTypes } from './allEpisodes.actions'
import { AllEpisodesStore, ActionType } from './../types'

const initialState: AllEpisodesStore = {
  episodes: {},
  error: false,
  loading: false,
}

const reducer = (
  state = initialState,
  action: ActionType,
): AllEpisodesStore => {
  switch (action.type) {
    case AllEpisodesTypes.ALL_EPISODES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case AllEpisodesTypes.ALL_EPISODES_SUCCESS:
      return {
        ...state,
        loading: false,
        episodes: action.payload,
      }
    case AllEpisodesTypes.ALL_EPISODES_FAILED:
      return {
        ...state,
        error: true,
      }
    default:
      return state
  }
}

export default reducer
