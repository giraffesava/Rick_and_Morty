import { Characters, CharactersActions } from './characters.actions'
import { CharactersStore } from '../types'

const InitialStore: CharactersStore = {
  error: false,
  loading: false,
  characters: [],
}

const charactersReducer = (
  state = InitialStore,
  action: CharactersActions,
): CharactersStore => {
  switch (action.type) {
    case Characters.CHARACTERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      }
    case Characters.CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload,
      }
    case Characters.CHARACTERS_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
      }
    default:
      return state
  }
}

export default charactersReducer
