import React from 'react'
import classes from './Character.module.css'
import { Link } from 'react-router-dom'

const Character: React.FC<any> = ({ name, species, status, id, image }) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img src={image} alt="picture" />
        <h1>{name}</h1>
        <h1>{species}</h1>
        <h1>{status}</h1>
        <Link to={`/location/${id}`} className={classes.link}>
          <h1 className={classes.location}>Location</h1>
        </Link>
      </div>
    </div>
  )
}

export default Character
