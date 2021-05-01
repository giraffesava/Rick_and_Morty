import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { charactersRequest } from '../../store/characters/characters.actions'
import { selectCharacters } from '../../store/characters/characters.selectors'
import Character from 'components/Character/Character'
import Header from 'components/Header/Header'
import { StyledWallpaper } from './../StyledComponents/StyledWallpaper'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  font-size: 55px;
  color: white;
  margin: 20px;
`

const CharacterWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: baseline;
  flex-wrap: wrap;
  width: 90%;
`

interface Props {
  key: any
  allCharacters?: any
}

const EpisodePage: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const allcharacters = useSelector(selectCharacters)
  const { id } = useParams()
  useEffect(() => {
    dispatch(charactersRequest(id))
  }, [])

  return (
    <>
      <Header />
      <StyledWallpaper
        src="https://cdn.hipwallpaper.com/i/56/3/o2iEmS.jpg"
        alt="wallpaper"
      />
      <Title>Characters:</Title>
      <CharacterWrapper>
        {allcharacters.characters.map((item) => {
          return (
            <Character
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              species={item.species}
              status={item.status}
            />
          )
        })}
      </CharacterWrapper>
    </>
  )
}

export default EpisodePage
