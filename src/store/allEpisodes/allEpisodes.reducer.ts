import { AllEpisodesTypes, allEpisodesActions } from './allEpisodes.actions'
import { AllEpisodesStore } from './../types'

const InitialState: AllEpisodesStore = {
  episodes: [],
  error: false,
  loading: false,
}

const allEpisodesReducer = (
  state = InitialState,
  action: allEpisodesActions,
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

export default allEpisodesReducer
