// import { AllEpisodesStore } from './../types'

interface StateType {
  map: any
  charactersReducer: any[]
}

export const selectCharacters = (state): StateType =>
  state.charactersReducer.payload
