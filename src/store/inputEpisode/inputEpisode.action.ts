import { InputEpisodeTypes } from '../types'

export enum InputEpisode {
  EPISODE_INPUT_GET = 'EPISODE_INPUT_GET',
  EPISODE_INPUT_SUCCESS = 'EPISODE_INPUT_SUCCESS',
  EPISODE_INPUT_FAILED = 'EPISODE_INPUT_FAILED',
}

export const inputEpisodeGet = (name: string): InputEpisodeTypes => {
  return {
    type: InputEpisode.EPISODE_INPUT_GET,
    name,
  }
}
export const inputEpisodeSuccess = (data: any[]): InputEpisodeTypes => {
  return {
    type: InputEpisode.EPISODE_INPUT_SUCCESS,
    data,
  }
}
export const inputEpisodeFailed = (): InputEpisodeTypes => {
  return {
    type: InputEpisode.EPISODE_INPUT_FAILED,
  }
}

export type InputEpisodeActions =
  | ReturnType<typeof inputEpisodeGet>
  | ReturnType<typeof inputEpisodeSuccess>
  | ReturnType<typeof inputEpisodeFailed>
