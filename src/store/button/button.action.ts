import { ButtonTypes } from './../types'
export enum Button {
  BUTTON_SEASON_ON = 'BUTTON_SEASON_ON',
  BUTTON_NAME_ON = 'BUTTON_NAME_ON',
}

export const buttonOnSeason = (): ButtonTypes => ({
  type: Button.BUTTON_SEASON_ON,
})

export const buttonOnName = (): ButtonTypes => ({
  type: Button.BUTTON_NAME_ON,
})

export type buttonAction =
  | ReturnType<typeof buttonOnSeason>
  | ReturnType<typeof buttonOnName>
