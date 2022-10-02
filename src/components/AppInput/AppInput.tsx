import React, { FC } from 'react'
import './AppInput.scss'

interface AppInputProps {
      type: string
      placeHolder: string
      inputClasses: string[]
}

const AppInput : FC<AppInputProps> = ({ type, placeHolder, inputClasses }): JSX.Element => {
  return (
    <div className="input-holder">
      <input className={inputClasses.join(' ')} type={type} placeholder={placeHolder} />
    </div>
  )
}
export default AppInput
