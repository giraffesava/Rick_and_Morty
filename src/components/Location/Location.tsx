import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { locationRequestAction } from './../../store/location/location.actions'
import { selectLocation } from './../../store/location/location.selector'
import Header from './../Header/Header'
import { StyledWallpaper } from './../StyledComponents/StyledWallpaper'
import styled from 'styled-components'

const StyledContext = styled.div`
  text-align: center;
  margin: 20px auto;
  background-color: rgba(251, 245, 107, 0.7);
  width: 40%;
  padding: 20px;
  border-radius: 20px;
`

const Location: React.FC<any> = (props) => {
  const dispatch = useDispatch()
  const location = useSelector(selectLocation)
  const { id } = props.match.params

  useEffect(() => {
    dispatch(locationRequestAction(id))
  }, [])

  return (
    <>
      <Header />
      <StyledWallpaper
        src="https://cdn.hipwallpaper.com/i/56/3/o2iEmS.jpg"
        alt="wallpaper"
      />
      {!location.data.error ? (
        <StyledContext>
          <h1>Name: {location.data.name}</h1>
          <h1>Type: {location.data.type}</h1>
          <h1>Dimension: {location.data.dimension}</h1>
        </StyledContext>
      ) : (
        <StyledContext>
          <h1>Location Not Found :( </h1>
        </StyledContext>
      )}
    </>
  )
}

export default Location
