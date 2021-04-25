import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllEpisodes } from './../../store/allEpisodes/allEpisodes.selectors'
import { allEpisodesRequest } from './../../store/allEpisodes/allEpisodes.actions'
import Season from 'components/Season/Season'
import Header from 'components/Header/Header'
import classes from './Body.module.css'
import Sidebar from 'components/Sidebar/Sidebar'
import { episodeFilterRequest } from './../../store/episodeFilter/episodeFilter.action'
import { selectorEpisodeFilter } from './../../store/episodeFilter/episodeFilter.selector'

const Body: React.FC<any> = () => {
  const episodes = useSelector(selectAllEpisodes)

  const filtereEpisode = useSelector(selectorEpisodeFilter)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allEpisodesRequest())
    dispatch(episodeFilterRequest())
  }, [])

  console.log('filtered', filtereEpisode)
  return (
    <div className={classes.container}>
      <img
        className={classes.wallpaper}
        src="https://cdn.hipwallpaper.com/i/56/3/o2iEmS.jpg"
        alt="wallpaper"
      />
      <Header />
      <div className={classes.uiContainter}>
        <div>
          <Sidebar />
        </div>
        <div>
          {episodes.map((item) => {
            return (
              <Season
                key={item.season}
                season={item.season}
                episodes={item.episodes}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Body
