import React, { useState, useContext } from 'react'
import { navigate } from 'gatsby'

import NavContainer from '../components/NavContainer'
import NavLink from '../components/NavLink'
import SEO from '../components/Seo'

import AuthContext from '../context/AuthContext'

const LoginPage = () => {
  const { user, login, loginAsGuest } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await login(email, password)
    } catch (error) {
      const errorMessage = error.message

      if (errorMessage) {
        setErrorMessage(errorMessage)
        setTimeout(() => {
          setErrorMessage(null)
        }, 7000)
      }
    }

    setEmail('')
    setPassword('')
  }

  if (user) {
    navigate('/admin')
    return null
  }

  return (
    <>
      <SEO title="Login to Restro" />
      <NavContainer siteTitle="Restro">
        <NavLink title="Home" linkTo="/" />
        <NavLink title="Menu" linkTo="/menu" />
        <NavLink title="Reservation" linkTo="/#reservation" />
      </NavContainer>

      <main className="wrapper">
        <div className="login-container">
          <h2 className="login__heading">Login</h2>
          <form className="login__form" onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                required
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                required
              />
            </label>
            <p className="login__error">{errorMessage}</p>

            <footer className="login__footer">
              <button
                type="button"
                onClick={loginAsGuest}
                className="login__button button"
              >
                Login as guest
              </button>

              <button
                type="submit"
                className="login__button button button--dark"
              >
                Login
              </button>
            </footer>
          </form>
        </div>
      </main>
    </>
  )
}

export default LoginPage
