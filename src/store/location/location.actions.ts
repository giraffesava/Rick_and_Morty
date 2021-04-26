import { LocationTypes } from './../types'

export enum Location {
  LOCATION_REQUEST = 'LOCATION_REQUEST',
  LOCATION_SUCCESS = 'LOCATION_SUCCESS',
  LOCATION_FAILED = 'LOCATION_FAILED',
}

export const locationRequestAction = (id: string): LocationTypes => ({
  type: Location.LOCATION_REQUEST,
  id,
})
export const locationSuccessAction = (payload: any[]): LocationTypes => ({
  type: Location.LOCATION_SUCCESS,
  payload,
})
export const locationFailedAction = (): LocationTypes => ({
  type: Location.LOCATION_FAILED,
})

export type LocationActions =
  | ReturnType<typeof locationRequestAction>
  | ReturnType<typeof locationSuccessAction>
  | ReturnType<typeof locationFailedAction>
