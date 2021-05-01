import React from 'react'
import classes from './Spinner.module.css'
import { useSelector } from 'react-redux'
import {
  selectAllEpisodes,
  selectCharacters,
  selectorEpisodeFilter,
  selectEpisode,
  selectLocation,
} from './../../store/allSelectors'

const Spinner: React.FC<any> = () => {
  const allEpisodes = useSelector(selectAllEpisodes)
  const characters = useSelector(selectCharacters)
  const filter = useSelector(selectorEpisodeFilter)
  const eachEpisode = useSelector(selectEpisode)
  const location = useSelector(selectLocation)

  return allEpisodes.loading ||
    characters.loading ||
    filter.loading ||
    eachEpisode.loading ||
    location.loading ? (
    <div className={classes.cssloadContainer}>
      <div className={classes.cssloadZenith}></div>
    </div>
  ) : null
}

export default Spinner
