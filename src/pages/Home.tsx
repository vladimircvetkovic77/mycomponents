import React, { FC } from 'react'
import AppInput from '../components/AppInput'
import AppSocialIconButton from '../components/AppSocialIconButton'
import './pageStyles/Home.scss'

interface HomeProps {
      title: string
}
const Home : FC<HomeProps> = ({ title }) => {
  return (
      <div className="sign-page-container">
            <div className="form-container sign-up-container">
                  <h1>Create Account</h1>
                  <div className="social-buttons-container">
                        <AppSocialIconButton
                              link="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2F"
                              linkClasses={['social-link']}
                              iconClasses={['fab', 'fa-facebook-f']}
                              />
                        <AppSocialIconButton
                              link="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2F"
                              linkClasses={['social-link']}
                              iconClasses={['fab', 'fab fa-google-plus-g']}
                              />
                        <AppSocialIconButton
                              link="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2F"
                              linkClasses={['social-link']}
                              iconClasses={['fab', 'fa-linkedin-in']}
                              />
                  </div>
                  <span>or use your email for registration</span>
                  <AppInput type="text" placeHolder="Name" inputClasses={['primary']} />
                  <AppInput type="email" placeHolder="Email" inputClasses={['primary']} />
                  <AppInput type="password" placeHolder="Password" inputClasses={['primary']} />
            </div>
            <div className="form-container sign-in-container">
                  <h1>Create Account</h1>
                  <span>or use your email for registration</span>
                  <AppInput type="text" placeHolder="Name" inputClasses={['primary']} />
                  <AppInput type="email" placeHolder="Email" inputClasses={['primary']} />
                  <AppInput type="password" placeHolder="Password" inputClasses={['primary']} />
            </div>
      </div>
  )
}
export default Home
