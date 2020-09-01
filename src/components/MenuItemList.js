import React from 'react'
import MenuItem from './MenuItem'

import { appendPoundSignToPrice } from '../utilities/formatPrice'

const MenuItemList = ({ menuItems }) => {
  return (
    <>
      {menuItems.map(food => (
        <MenuItem
          key={food.name}
          title={food.name}
          description={food.description}
          price={appendPoundSignToPrice(food.price)}
        />
      ))}
    </>
  )
}

export default MenuItemList
