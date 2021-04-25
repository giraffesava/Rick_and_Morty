import React, { useState } from 'react'
import classes from './Button.module.css'

const Button: React.FC<any> = ({ children }) => {
  const [active, setActive] = useState(false)

  const buttonHandler = () => {
    setActive((prev) => !prev)
  }

  return (
    <div>
      <button type="button" className={classes.button} onClick={buttonHandler}>
        {children}
      </button>
    </div>
  )
}

export default Button
