import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { locationRequestAction } from './../../store/location/location.actions'
import { selectLocation } from './../../store/location/location.selector'
import classes from './Location.module.css'
import Header from './../Header/Header'

const Location: React.FC<any> = (props) => {
  const dispatch = useDispatch()
  const location = useSelector(selectLocation)
  const { id } = props.match.params

  useEffect(() => {
    dispatch(locationRequestAction(id))
  }, [])

  return (
    <div>
      <Header />
      <img
        className={classes.wallpaper}
        src="https://cdn.hipwallpaper.com/i/56/3/o2iEmS.jpg"
        alt="wallpaper"
      />
      {!location.data.error ? (
        <div className={classes.textContainer}>
          <h1>Name: {location.data.name}</h1>
          <h1>Type: {location.data.type}</h1>
          <h1>Dimension: {location.data.dimension}</h1>
        </div>
      ) : (
        <h1 className={classes.textContainer}>Location Not Found :(</h1>
      )}
    </div>
  )
}

export default Location
