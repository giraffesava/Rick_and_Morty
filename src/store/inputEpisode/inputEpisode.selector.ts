import { InputEpisodeStore } from './../types'

export const selectEpisode = (state): InputEpisodeStore =>
  state.inputEpisodeReducer.data
