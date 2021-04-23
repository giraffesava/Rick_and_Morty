import React, { useState } from 'react'
import Episode from './../Episode/Episode'
import classes from './Season.module.css'
import { Props } from './../types'

const Season: React.FC<Props> = ({ episodes, season }) => {
  const [hidden, setHidden] = useState(true)

  const closeSeasonHandler = () => {
    setHidden((prev) => !prev)
  }

  const addNewViewHandler = () => {}

  return (
    <div className={classes.seasonWrapper}>
      <div className={classes.headerSeason} onClick={closeSeasonHandler}>
        <h1>Season: {season}</h1>
      </div>
      {!hidden &&
        episodes.map((item) => {
          return (
            <Episode
              key={item.episodes}
              episode={Number(item.episodes.split('E')[1])}
              episodes={item}
            />
          )
        })}
    </div>
  )
}

export default Season
