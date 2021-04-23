import React from 'react'
import classes from './Sidebar.module.css'
const Sidebar: React.FC<any> = () => {
  return (
    <div className={classes.sidebar}>
      <input placeholder="Search by episode"></input>
    </div>
  )
}

export default Sidebar
