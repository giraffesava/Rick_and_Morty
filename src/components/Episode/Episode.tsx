import React from 'react'
import classes from './Episode.module.css'
import { Props } from './../types'

const Episode: React.FC<Props> = ({ episode, episodes }) => {
  console.log('Episode', episodes.characters)
  return (
    <div className={classes.episodeWrapper}>
      <div className={classes.everyEpisode}>
        <p>Episode {episode}</p>
      </div>
    </div>
  )
}

export default Episode
