import { EpisodeFilterStore } from './../types'

interface StateType {
  episodeFilterReducer: EpisodeFilterStore
}

export const selectorEpisodeFilter = (state): StateType =>
  state.episodeFilterReducer.data
