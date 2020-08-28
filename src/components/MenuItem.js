import React from 'react'

const MenuItem = ({ title, description, price }) => (
  <dl className="food">
    <dt className="food__title">{title}</dt>
    <dd className="food__desc food__desc--large">{description}</dd>
    <dd className="food__price">{price}</dd>
  </dl>
)

export default MenuItem
