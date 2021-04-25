import { ButtonTypes } from './../types'
export enum Button {
  BUTTON_SEASON_ON = 'BUTTON_SEASON_ON',
  BUTTON_SEASON_OFF = 'BUTTON_SEASON_OFF',
}

export const buttonOnSeason = (): ButtonTypes => ({
  type: Button.BUTTON_SEASON_ON,
})

export const buttonOffSeason = (): ButtonTypes => ({
  type: Button.BUTTON_SEASON_OFF,
})

export type buttonAction =
  | ReturnType<typeof buttonOnSeason>
  | ReturnType<typeof buttonOffSeason>
