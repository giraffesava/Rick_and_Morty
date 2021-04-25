import { StateType, ButtonStore } from './../types'

export const selectButton = (state: StateType): ButtonStore =>
  state.buttonReducer
