import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
  width: 100px;
  height: 60px;
  display: inline;
  padding: 5px 10px;
  border-radius: 20px;
  margin: 0 5px;
  border: 5px solid rgb(116, 188, 216);
  font-size: 18px;
  background-color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:active {
    background-color: rgba(155, 155, 155, 0.8);
  }
`
interface Props {
  onClick: () => void
  children: string
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>
}

export default Button
