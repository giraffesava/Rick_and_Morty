import React from 'react'
import classes from './Button.module.css'

interface Props {
  onClick: () => void
  children: string
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <div>
      <button type="button" className={classes.button} onClick={onClick}>
        {children}
      </button>
    </div>
  )
}

export default Button
