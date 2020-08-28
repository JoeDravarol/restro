import React from 'react'
import MenuItem from './MenuItem'

const MenuItemList = ({ menuItems }) => {
  return (
    <>
      {menuItems.map((food, idx) => (
        <MenuItem
          key={food.title + idx}
          title={food.title}
          description={food.description}
          price={food.price}
        />
      ))}
    </>
  )
}

export default MenuItemList
