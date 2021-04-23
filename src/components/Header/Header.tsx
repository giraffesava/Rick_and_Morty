import React from 'react'
import classes from './Header.module.css'

const Header: React.FC<any> = () => {
  return (
    <div className={classes.headerwrapper}>
      <h1>RICK AND MORTY</h1>
    </div>
  )
}

export default Header
