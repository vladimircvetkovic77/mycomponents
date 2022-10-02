import React, { FC } from 'react'
import './AppSocialIconButton.scss'

interface AppSocialIconButtonProps {
      link: string
      linkClasses: string[]
      iconClasses: string[]
}

const AppSocialIconButton : FC<AppSocialIconButtonProps> = ({ link, linkClasses, iconClasses }): JSX.Element => {
  return (
    <div className="social-icon-button-holder">
      <a href={link} className={linkClasses.join(' ')}><i className={iconClasses.join(' ')}></i></a>
    </div>
  )
}
export default AppSocialIconButton
