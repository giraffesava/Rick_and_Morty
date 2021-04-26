import { AllEpisodesTypes } from './allEpisodes/allEpisodes.actions'
import { Characters } from './characters/characters.actions'
import { InputEpisode } from './inputEpisode/inputEpisode.action'
import { EpisodeFilter } from './episodeFilter/episodeFilter.action'
import { Button } from './button/button.action'
import { Location } from './location/location.actions'

//TYPES FOR allEpisodes

export interface ActionType {
  type: AllEpisodesTypes
  payload?: any[]
}

export interface AllEpisodesStore {
  episodes: any
  loading: boolean
  error: boolean
}

export interface Episodes {
  id: string
  characters: Array<string>
  air_date: string
  episodes: Array<string>
  name: string
}

//TYPES FOR Characters

export interface CharactersTypes {
  type: Characters
  id?: number
  payload?: any[]
}

export interface CharactersStore {
  loading: boolean
  error: boolean
  characters: any[]
}

// TYPES FOR InputEpisode

export interface InputEpisodeTypes {
  type: InputEpisode
  name?: string
  data?: any
}

export interface InputEpisodeStore {
  map?: any
  loading: boolean
  error: boolean
  data: any[]
}

// TYPES FOR EpisodeFilter

export interface EpisodeFilterTypes {
  type: EpisodeFilter
  payload?: any[]
}

export interface EpisodeFilterStore {
  data: any[]
  loading: boolean
  error: boolean
}

// TYPES FOR button

export interface ButtonTypes {
  type: Button
}

export interface ButtonStore {
  seasonIsOn: boolean
  nameIsOn: boolean
}

// TYPES FOR location

export interface LocationTypes {
  type: Location
  id?: string
  payload?: any
}

export interface LocationStore {
  data: any
  loading: boolean
  error: boolean
}

// TYPES FOR selectors

export interface StateType {
  allEpisodesReducer: AllEpisodesStore
  charactersReducer: CharactersStore
  inputEpisodeReducer: InputEpisodeStore
  episodeFilterReducer: EpisodeFilterStore
  buttonReducer: ButtonStore
  locationReducer: LocationStore
}
