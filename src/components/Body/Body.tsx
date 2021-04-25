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
import { selectButton } from './../../store/button/button.selector'
import Episode from 'components/Episode/Episode'

const Body: React.FC<any> = () => {
  const dispatch = useDispatch()
  const allepisodes = useSelector(selectAllEpisodes)
  const filteredEpisode = useSelector(selectorEpisodeFilter)
  const button = useSelector(selectButton)

  useEffect(() => {
    dispatch(allEpisodesRequest())
    dispatch(episodeFilterRequest())
  }, [])

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
          {button.seasonIsOn ? (
            allepisodes.episodes.map((item) => {
              return (
                <Season
                  key={item.season}
                  season={item.season}
                  episodes={item.episodes}
                />
              )
            })
          ) : (
            <div className={classes.contentContainer}>
              {filteredEpisode.data.map((item) => {
                return (
                  <Episode
                    key={item.episodes}
                    episode={Number(item.episodes.split('E')[1])}
                    episodes={item}
                  />
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Body
