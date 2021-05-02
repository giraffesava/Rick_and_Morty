import React from 'react'
import { Props } from './../types'
import styled from 'styled-components'
import { StyledLink } from './../StyledComponents/StyledLink'

const EpisodeWrapper = styled.div`
  width: 95%;
  display: block;
  margin: 5px auto;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 20px;
`
const EachEpisode = styled.div`
  color: rgb(58, 58, 58);
  &:hover {
    background-color: rgba(43, 44, 42, 0.7);
    color: #fff;
    border-radius: 18px;
  }
`

const Episode: React.FC<Props> = ({ episode, episodes }) => {
  return (
    <StyledLink padding="0px" to={`/episode/${episodes.id}`}>
      <EpisodeWrapper>
        <EachEpisode>
          <p>Episode: {episode}</p>
          <p>Name: {episodes.name}</p>
          <p>Data: {episodes.air_date}</p>
        </EachEpisode>
      </EpisodeWrapper>
    </StyledLink>
  )
}

export default Episode
