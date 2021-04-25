import React from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'

const Header: React.FC<any> = () => {
  return (
    <div className={classes.headerwrapper}>
      <Link to="/" className={classes.link}>
        <h1 className={classes.text}>RICK AND MORTY</h1>
      </Link>
    </div>
  )
}

export default Header
