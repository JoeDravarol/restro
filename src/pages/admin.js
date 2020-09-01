import React, { useState, useContext } from 'react'
import { navigate } from 'gatsby'

import Layout from '../components/Layout'
import Loader from '../components/Loader'
import NavContainer from '../components/NavContainer'
import NavLink from '../components/NavLink'
import ReservationDashboardInfoList from '../components/ReservationDashboardInfoList'

import AuthContext from '../context/AuthContext'
import { useSubscribeCollection } from '../hooks/useSubscribeCollection'
import { todaysDate, formatDateToDMY } from '../utilities/date'

const AdminPage = () => {
  const today = todaysDate()
  const { user, logout } = useContext(AuthContext)
  const [date, setDate] = useState(today)
  const { data: reservations, loading, error } = useSubscribeCollection(
    'reservations'
  )

  if (user) {
    navigate('/login')
    return null
  }

  if (loading) return <Loader />

  if (error) console.error(error)

  return (
    <>
      <NavContainer>
        <NavLink title="Home" linkTo="/" />
        <NavLink title="Menu" linkTo="/" />
        <li className="primary-nav__list">
          <button
            className="primary-nav__link button--text-only"
            onClick={logout}
          >
            Logout
          </button>
        </li>
      </NavContainer>

      <Layout>
        <header className="date-container">
          <h2>
            {date === today
              ? "Today's Reservation"
              : `Reservations on ${formatDateToDMY(date)}`}
          </h2>
          <label htmlFor="date">
            Filter by date
            <input
              id="date"
              name="date"
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </label>
        </header>

        <ReservationDashboardInfoList date={date} reservations={reservations} />
      </Layout>
    </>
  )
}

export default AdminPage
