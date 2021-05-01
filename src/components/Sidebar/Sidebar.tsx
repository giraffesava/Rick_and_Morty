import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inputEpisodeGet } from './../../store/inputEpisode/inputEpisode.action'
import { selectEpisode } from './../../store/inputEpisode/inputEpisode.selector'
import Episode from 'components/Episode/Episode'
import Button from './../Button/Button'
import {
  buttonOnSeason,
  buttonOnName,
} from './../../store/button/button.action'
import styled from 'styled-components'

const StyledSidebar = styled.div`
  background-color: rgba(251, 245, 107, 0.7);
  border-radius: 20px;
  width: 300px;
  height: auto;
  text-align: center;
  padding: 5px;
  max-height: 160px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`
const Input = styled.input`
  border: 5px solid rgb(116, 188, 216);
  width: 90%;
  box-sizing: border-box;
  border-radius: 20px;
  font-size: 29px;
  padding: 0 8px;
  &:focus {
    outline: none;
`
const EpisodeContainer = styled.div`
  border-radius: 20px;
  background-color: rgba(251, 245, 107, 0.7);
  width: 100%;
  margin: 10% auto;
  padding: 5px 0;
`
const Title = styled.p`
  font-weight: 900;
  font-size: 30px;
`
const Sidebar: React.FC<any> = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const episode = useSelector(selectEpisode)

  useEffect(() => {
    const editedInput = input.replace(/\s+/g, '&')
    if (editedInput.length > 0) dispatch(inputEpisodeGet(editedInput))
  }, [input])

  const getInputData = (e) => {
    setInput(e.target.value.trimLeft())
  }

  const pressSeasonButtonHandler = () => {
    dispatch(buttonOnSeason())
  }

  const pressNameButtonHandler = () => {
    dispatch(buttonOnName())
  }

  return (
    <StyledSidebar>
      <Title>Sort by:</Title>
      <ButtonContainer>
        <Button onClick={pressSeasonButtonHandler}>Seasons</Button>
        <Button onClick={pressNameButtonHandler}>Name</Button>
      </ButtonContainer>
      <Input
        type="text"
        placeholder="Search by episode"
        value={input}
        onChange={getInputData}
      />
      {!!(episode.data && input) && (
        <EpisodeContainer>
          {episode.data.map((item) => {
            return <Episode key={item.id} episode={item.id} episodes={item} />
          })}
        </EpisodeContainer>
      )}
    </StyledSidebar>
  )
}

export default Sidebar
