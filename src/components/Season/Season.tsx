import React, { useState } from 'react'
import Episode from './../Episode/Episode'
import { Props } from './../types'
import styled from 'styled-components'

const SeasonWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  display: block;
  margin: 20px auto;
  background-color: rgba(251, 245, 107, 0.7);
  border-radius: 20px;
  box-shadow: black;
  cursor: pointer;
`
const Title = styled.h1`
  font-size: 40px;
  color: rgb(0, 0, 0);
  text-align: center;
  padding: 0 120px;
`

const Season: React.FC<Props> = ({ episodes, season }) => {
  const [hidden, setHidden] = useState(true)

  const closeSeasonHandler = () => {
    setHidden((prev) => !prev)
  }

  return (
    <SeasonWrapper>
      <Title onClick={closeSeasonHandler}>Season: {season}</Title>
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
    </SeasonWrapper>
  )
}

export default Season
