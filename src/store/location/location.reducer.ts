import { Location, LocationActions } from './location.actions'
import { LocationStore } from './../types'

const InitialStore: LocationStore = {
  data: [],
  loading: false,
  error: false,
}

export const locationReducer = (
  state = InitialStore,
  action: LocationActions,
): LocationStore => {
  switch (action.type) {
    case Location.LOCATION_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case Location.LOCATION_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    }
    case Location.LOCATION_FAILED: {
      return {
        ...state,
        data: [],
        loading: false,
        error: true,
      }
    }
    default:
      return state
  }
}

export default locationReducer
