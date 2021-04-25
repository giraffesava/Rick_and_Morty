import { ButtonStore } from './../types'
import { Button, buttonAction } from './button.action'

const InitialStore: ButtonStore = {
  seasonIsOn: true,
  nameIsOn: false,
}

const buttonReducer = (
  state = InitialStore,
  action: buttonAction,
): ButtonStore => {
  switch (action.type) {
    case Button.BUTTON_SEASON_ON: {
      return {
        ...state,
        seasonIsOn: true,
        nameIsOn: false,
      }
    }
    case Button.BUTTON_SEASON_OFF: {
      return {
        ...state,
        seasonIsOn: false,
        nameIsOn: true,
      }
    }
    default:
      return state
  }
}

export default buttonReducer
