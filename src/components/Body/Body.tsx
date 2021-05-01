import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllEpisodes } from './../../store/allEpisodes/allEpisodes.selectors'
import { allEpisodesRequest } from './../../store/allEpisodes/allEpisodes.actions'
import Season from 'components/Season/Season'
import Header from 'components/Header/Header'
import Sidebar from 'components/Sidebar/Sidebar'
import { episodeFilterRequest } from './../../store/episodeFilter/episodeFilter.action'
import { selectorEpisodeFilter } from './../../store/episodeFilter/episodeFilter.selector'
import { selectButton } from './../../store/button/button.selector'
import Episode from 'components/Episode/Episode'
import { StyledWallpaper } from '../StyledComponents/StyledWallpaper'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-around;
`

const ContentContainer = styled.div`
  background-color: rgba(251, 245, 107, 0.7);
  width: 50%;
  padding: 5px 20px;
  border-radius: 20px;
`

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
    <>
      <Header />
      <StyledWallpaper
        src="https://cdn.hipwallpaper.com/i/56/3/o2iEmS.jpg"
        alt="wallpaper"
      />
      <Container>
        <Sidebar />
        <ContentContainer>
          {button.seasonIsOn
            ? allepisodes.episodes.map((item) => {
                return (
                  <Season
                    key={item.season}
                    season={item.season}
                    episodes={item.episodes}
                  />
                )
              })
            : filteredEpisode.data.map((item) => {
                return (
                  <Episode
                    key={item.episodes}
                    episode={Number(item.episodes.split('E')[1])}
                    episodes={item}
                  />
                )
              })}
        </ContentContainer>
      </Container>
    </>
  )
}

export default Body
