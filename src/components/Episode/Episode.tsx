import React from 'react'
import classes from './Episode.module.css'
import { Props } from './../types'
import { Link } from 'react-router-dom'

const Episode: React.FC<Props> = ({ episode, episodes }) => {
  console.log('Episode', episodes.characters)
  return (
    <Link to={`/${episodes.id}`} key={episodes.episodes}>
      <div className={classes.episodeWrapper}>
        <div className={classes.everyEpisode}>
          <p>Episode: {episode}</p>
          <p>Name: {episodes.name}</p>
          <p>Data: {episodes.air_date}</p>
        </div>
      </div>
    </Link>
  )
}

export default Episode
