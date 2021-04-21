import React, { useEffect } from 'react'
import Episode from './../Episode/Episode'
import classes from './Season.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllEpisodes } from './../../store/allEpisodes/allEpisodes.selectors'
import { allEpisodesRequest } from './../../store/allEpisodes/allEpisodes.actions'

const Season: React.FC<any> = () => {
  const episodes = useSelector(selectAllEpisodes)
  console.log(episodes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allEpisodesRequest())
  }, [])
  return (
    <div className={classes.seasonContainer}>
      <p>Season 1</p>
      <Episode />
    </div>
  )
}

export default Season
