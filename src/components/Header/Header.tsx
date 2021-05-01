import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: rgba(160, 160, 160, 0.3);
  color: #fff;
  margin-bottom: 20px;
`

const Title = styled.h1`
  font-size: 45px;
  margin: 0 10px;
  display: inline-block;
  color: rgba(250, 250, 100, 0.8);
  padding: 0 10px;
  &:hover {
    color: #fff;
  }
`

const Header: React.FC<any> = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Title>RICK AND MORTY</Title>
      </Link>
    </Wrapper>
  )
}

export default Header
