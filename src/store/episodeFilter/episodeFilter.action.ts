import { EpisodeFilterTypes } from './../types'

export enum EpisodeFilter {
  EPISODES_REQUEST = 'EPISODES_REQUEST',
  EPISODES_SUCCESS = 'EPISODES_SUCCESS',
  EPISODES_FAILED = 'EPISODES_FAILED',
}

export const episodeFilterRequest = (): EpisodeFilterTypes => ({
  type: EpisodeFilter.EPISODES_REQUEST,
})

export const episodeFilterSuccess = (payload: any[]): EpisodeFilterTypes => ({
  type: EpisodeFilter.EPISODES_REQUEST,
  payload,
})

export const episodeFilterFailed = (): EpisodeFilterTypes => ({
  type: EpisodeFilter.EPISODES_REQUEST,
})

export type episodeFilterActions =
  | ReturnType<typeof episodeFilterRequest>
  | ReturnType<typeof episodeFilterSuccess>
  | ReturnType<typeof episodeFilterFailed>
