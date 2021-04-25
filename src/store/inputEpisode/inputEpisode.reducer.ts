import { InputEpisodeActions, InputEpisode } from './inputEpisode.action'
import { InputEpisodeStore } from './../types'

const InitialStore: InputEpisodeStore = {
  data: null,
  loading: false,
  error: false,
}

const inputEpisodeReducer = (
  state = InitialStore,
  action: InputEpisodeActions,
): InputEpisodeStore => {
  switch (action.type) {
    case InputEpisode.EPISODE_INPUT_GET:
      return {
        ...state,
        loading: true,
      }
    case InputEpisode.EPISODE_INPUT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      }
    case InputEpisode.EPISODE_INPUT_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

export default inputEpisodeReducer
