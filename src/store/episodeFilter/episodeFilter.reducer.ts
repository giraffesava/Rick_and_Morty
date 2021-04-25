import { EpisodeFilter, episodeFilterActions } from './episodeFilter.action'
import { EpisodeFilterStore } from './../types'

const InitialState: EpisodeFilterStore = {
  data: [],
  error: false,
  loading: false,
}

const episodeFilterReducer = (
  state = InitialState,
  action: episodeFilterActions,
): EpisodeFilterStore => {
  switch (action.type) {
    case EpisodeFilter.EPISODES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case EpisodeFilter.EPISODES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    case EpisodeFilter.EPISODES_FAILED:
      return {
        ...state,
        error: true,
      }
    default:
      return state
  }
}

export default episodeFilterReducer
