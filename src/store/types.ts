import { AllEpisodesTypes } from './allEpisodes/allEpisodes.actions'
import { Characters } from './characters/characters.actions'
import { InputEpisode } from './inputEpisode/inputEpisode.action'
import { EpisodeFilter } from './episodeFilter/episodeFilter.action'
//TYPES FOR allEpisodes

export interface ActionType {
  type: AllEpisodesTypes
  payload?: any[]
}

export interface AllEpisodesStore {
  map?: any
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
  [x: string]: any
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
  payload: any[]
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
  data: any
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
