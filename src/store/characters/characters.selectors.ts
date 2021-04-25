import { StateType, CharactersStore } from './../types'

export const selectCharacters = (state: StateType): CharactersStore =>
  state.charactersReducer
