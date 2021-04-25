import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './EpisodePage.module.css'
import { useParams } from 'react-router-dom'
import { charactersRequest } from '../../store/characters/characters.actions'
import { selectCharacters } from '../../store/characters/characters.selectors'
import Character from 'components/Character/Character'
import Header from 'components/Header/Header'
interface Props {
  key: any
  allCharacters?: any
}

const EpisodePage: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const characters = useSelector(selectCharacters)
  const { id } = useParams()
  useEffect(() => {
    dispatch(charactersRequest(id))
  }, [])

  return (
    <>
      <Header />
      <div className={classes.container}>
        <img
          className={classes.wallpaper}
          src="https://cdn.hipwallpaper.com/i/56/3/o2iEmS.jpg"
          alt="wallpaper"
        />
        <h1>Characters:</h1>
        <div className={classes.characters}>
          {characters.map((item) => {
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
        </div>
      </div>
    </>
  )
}

export default EpisodePage
