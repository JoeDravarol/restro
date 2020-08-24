import React from 'react'
import PropTypes from 'prop-types'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const NavLink = ({ title, linkTo }) => {
  return (
    <li className="primary-nav__list">
      <AnchorLink
        to={linkTo}
        title={title}
        className="primary-nav__link"
        stripHash
      />
    </li>
  )
}

NavLink.defaultProps = {
  title: '',
  linkTo: '/',
}

NavLink.propTypes = {
  title: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
}

export default NavLink
