import { CharactersTypes } from './../types'

export enum Characters {
  CHARACTERS_REQUEST = 'CHARACTERS_REQUEST',
  CHARACTERS_SUCCESS = 'CHARACTERS_SUCCESS',
  CHARACTERS_FAILED = 'CHARACTERS_FAILED',
}

export const charactersRequest = (id: number): CharactersTypes => {
  return {
    type: Characters.CHARACTERS_REQUEST,
    id,
  }
}
export const charactersSuccess = (payload: any[]): CharactersTypes => {
  return {
    type: Characters.CHARACTERS_SUCCESS,
    payload,
  }
}
export const charactersFailed = (): CharactersTypes => {
  return {
    type: Characters.CHARACTERS_FAILED,
  }
}

export type CharactersActions =
  | ReturnType<typeof charactersRequest>
  | ReturnType<typeof charactersSuccess>
  | ReturnType<typeof charactersFailed>
