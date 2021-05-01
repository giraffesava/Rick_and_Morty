import React from 'react'
import styled from 'styled-components'
import { StyledLink } from './../StyledComponents/StyledLink'

const Container = styled.div`
  width: 250px;
  height: 280px;
  margin: 10px auto;
  padding: 0 10px;
  text-align: center;
  font-family: arial;
  background-color: rgba(251, 245, 107, 0.8);
  border-radius: 30px;
`

const Image = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  padding: 5px 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`

const Title = styled.h2`
  font-size: 18px;
  color: black;
`

const LinkText = styled(Title)`
  &:hover {
    background-color: rgba(43, 44, 42, 0.7);
    color: #fff;
    border-radius: 20px;
  }
`

const Character: React.FC<any> = ({ name, species, status, id, image }) => {
  return (
    <Container>
      <Image src={image} alt="picture" />
      <Title>{name}</Title>
      <Title>{species}</Title>
      <Title>{status}</Title>
      <StyledLink padding="5px" to={`/location/${id}`}>
        <LinkText>Location</LinkText>
      </StyledLink>
    </Container>
  )
}

export default Character
