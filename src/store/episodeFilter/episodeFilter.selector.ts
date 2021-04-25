import { StateType, EpisodeFilterStore } from './../types'

export const selectorEpisodeFilter = (state: StateType): EpisodeFilterStore =>
  state.episodeFilterReducer
