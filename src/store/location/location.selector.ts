import { StateType, LocationStore } from './../types'

export const selectLocation = (state: StateType): LocationStore =>
  state.locationReducer
