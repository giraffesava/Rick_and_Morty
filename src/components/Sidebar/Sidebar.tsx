import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './Sidebar.module.css'
import { inputEpisodeGet } from './../../store/inputEpisode/inputEpisode.action'
import { selectEpisode } from './../../store/inputEpisode/inputEpisode.selector'
import Episode from 'components/Episode/Episode'
import Button from './../Button/Button'
import {
  buttonOnSeason,
  buttonOnName,
} from './../../store/button/button.action'
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
    <div className={classes.sidebar}>
      <p>Sort by:</p>
      <div className={classes.buttonContainer}>
        <Button onClick={pressSeasonButtonHandler}>Seasons</Button>
        <Button onClick={pressNameButtonHandler}>Name</Button>
      </div>
      <input
        type="text"
        placeholder="Search by episode"
        value={input}
        onChange={getInputData}
      ></input>
      <div className={classes.episodeContainer}>
        {!!(episode.data && input) &&
          episode.data.map((item) => {
            return <Episode key={item.id} episode={item.id} episodes={item} />
          })}
      </div>
    </div>
  )
}

export default Sidebar
