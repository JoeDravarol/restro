import React from 'react'
import PropTypes from 'prop-types'

function Content({ title, description, children }) {
  return (
    <div className="content">
      <h2 className="content__title">{title}</h2>
      <p className="content__desc">{description}</p>
      {children}
    </div>
  )
}

Content.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Content
