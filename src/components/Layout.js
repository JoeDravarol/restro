import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <>
      <main className="layout-container">{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
