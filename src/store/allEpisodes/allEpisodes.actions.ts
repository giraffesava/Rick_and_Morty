/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export enum AllEpisodesTypes {
  ALL_EPISODES_REQUEST = 'ALL_EPISODES_REQUEST',
  ALL_EPISODES_SUCCESS = 'ALL_EPISODES_SUCCESS',
  ALL_EPISODES_FAILED = 'ALL_EPISODES_FAILED',
}
import { ActionType } from './../types'

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
