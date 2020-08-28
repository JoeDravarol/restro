import React from 'react'
import Layout from '../components/Layout'
import NavContainer from '../components/NavContainer'
import NavLink from '../components/NavLink'
import MenuItemList from '../components/MenuItemList'

const MenuPage = () => {
  // Temporary data
  const menus = [
    {
      type: 'Appetizers',
      items: [
        {
          title: 'Aubergine and celeriac parcels',
          description:
            'Thin filo pastry cases stuffed with salted aubergine and fresh celeriac.',
          price: '£11',
        },
        {
          title: 'Ginger and rabbit soup',
          description: 'Fresh ginger and rabbit combined into smooth soup.',
          price: '£11',
        },
        {
          title: 'Steak and bacon soup',
          description: 'Steak and back bacon combined into smooth soup.',
          price: '£11',
        },
        {
          title: 'Coriander and veal gyoza',
          description:
            'Thin pastry cases stuffed with fresh coriander and veal.',
          price: '£11',
        },
      ],
    },
    {
      type: 'Mains',
      items: [
        {
          title: 'Cilantro Lime Chicken',
          description: 'Juicy chicken thighs with a golden, crispy skin.',
          price: '£11',
        },
        {
          title: 'Lobster and pectin salad',
          description: 'Fresh lobster and pectin served on a bed of lettuce.',
          price: '£11',
        },
        {
          title: 'Squash and chicken fusilli',
          description:
            'Fresh egg pasta in a sauce made from acorn squash and free range chicken.',
          price: '£11',
        },
        {
          title: 'Turkey and paneer skewers',
          description:
            'Bamboo skewers loaded with smoked turkey and fried paneer.',
          price: '£11',
        },
      ],
    },
    {
      type: 'Desserts',
      items: [
        {
          title: 'Sultana and mango cake',
          description: 'Rich cake made with sultana and fresh mango.',
          price: '£11',
        },
        {
          title: 'Mortadella and chocolate mousse',
          description:
            'A light mousse made with mortadella and white chocolate.',
          price: '£11',
        },
        {
          title: 'Strawberry and camembert crepes',
          description:
            'Crispy crepes filled with fresh strawberries and camembert.',
          price: '£11',
        },
        {
          title: 'Ginger and yoghurt cake',
          description: 'Rich cake made with spicy ginger and greek yoghurt.',
          price: '£11',
        },
      ],
    },
  ]

  return (
    <>
      <NavContainer siteTitle="Restro">
        <NavLink title="Home" linkTo="/" />
        <NavLink title="Menu" linkTo="/menu" />
        <NavLink title="Reservation" linkTo="/#reservation" stripHash />
      </NavContainer>

      <Layout>
        <h2 className="menu__heading">Menu</h2>

        <div className="course-container">
          {menus.map(menu => {
            return (
              <section key={menu.type} className="course">
                <h3 className="course__title">{menu.type}</h3>

                <MenuItemList menuItems={menu.items} />
              </section>
            )
          })}
        </div>
      </Layout>
    </>
  )
}

export default MenuPage
