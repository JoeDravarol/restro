import React from 'react'

import Layout from '../components/Layout'
import Loader from '../components/Loader'
import NavContainer from '../components/NavContainer'
import NavLink from '../components/NavLink'
import MenuItemList from '../components/MenuItemList'
import Seo from '../components/Seo'

import { useSubscribeCollection } from '../hooks/useSubscribeCollection'

const MenuPage = () => {
  const { data: menusData, loading, error } = useSubscribeCollection('menus')

  if (loading) return <Loader />

  if (error) console.error(error)

  return (
    <>
      <Seo title="Menu" />
      <NavContainer siteTitle="Restro">
        <NavLink title="Home" linkTo="/" />
        <NavLink title="Menu" linkTo="/menu" />
        <NavLink title="Reservation" linkTo="/#reservation" />
      </NavContainer>

      <Layout>
        <h2 className="menu__heading">Menu</h2>

        <div className="course-container">
          {menusData.map(menu => {
            // Convert Firebase array like object to array
            const itemsKey = Object.keys(menu.items)
            const items = itemsKey.map(key => menu.items[key])
            const { id, name } = menu

            return (
              <section key={id} className="course">
                <h3 className="course__title">{name}</h3>

                <MenuItemList menuItems={items} />
              </section>
            )
          })}
        </div>
      </Layout>
    </>
  )
}

export default MenuPage
