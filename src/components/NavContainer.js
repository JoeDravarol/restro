import React, { useState } from 'react'
import { Link } from 'gatsby'
import NavLink from './NavLink'

const NavContainer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="nav-container">
      <Link to="/" className="logo">
        <h1 className="logo__title">Restro</h1>
      </Link>

      <nav className="primary-nav" aria-label="menu">
        <button
          className="primary-nav__toggle-btn"
          aria-label="toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(currentState => !currentState)}
        >
          ☰
        </button>
        <ul
          className={`primary-nav__ul ${isOpen ? 'expand' : ''}`}
          aria-hidden={isOpen}
        >
          {children}
        </ul>
      </nav>
    </div>
  )
}

NavContainer.defaultProps = {
  children: [
    <NavLink title="Home" linkTo="/" />,
    <NavLink title="Menu" linkTo="/menu" />,
    <NavLink title="Contact" linkTo="/#contact" />,
    <NavLink title="Dashboard" linkTo="/admin" />,
  ],
}

export default NavContainer
