/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ActionType } from './../types'
export enum AllEpisodesTypes {
  ALL_EPISODES_REQUEST = 'ALL_EPISODES_REQUEST',
  ALL_EPISODES_SUCCESS = 'ALL_EPISODES_SUCCESS',
  ALL_EPISODES_FAILED = 'ALL_EPISODES_FAILED',
}

export const allEpisodesRequest = (): ActionType => ({
  type: AllEpisodesTypes.ALL_EPISODES_REQUEST,
})

export const allEpisodesSuccess = (payload: any): ActionType => ({
  type: AllEpisodesTypes.ALL_EPISODES_SUCCESS,
  payload,
})

export const allEpisodesFailed = (): ActionType => ({
  type: AllEpisodesTypes.ALL_EPISODES_FAILED,
})

export type allEpisodesActions =
  | ReturnType<typeof allEpisodesRequest>
  | ReturnType<typeof allEpisodesSuccess>
  | ReturnType<typeof allEpisodesFailed>
