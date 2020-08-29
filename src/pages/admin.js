import React, { useState, useEffect, useContext } from 'react'
import { navigate } from 'gatsby'

import Layout from '../components/Layout'
import NavContainer from '../components/NavContainer'
import NavLink from '../components/NavLink'
import ReservationDashboardInfoList from '../components/ReservationDashboardInfoList'

import AuthContext from '../context/AuthContext'
import { todaysDate, formatDateToDMY } from '../utilities/date'

const fakeData = [
  {
    name: 'John Doe',
    guest: '2',
    date: '2020-08-28',
    time: '17:30',
  },
  {
    name: 'Samuel Jackson',
    guest: '1',
    date: '2020-08-28',
    time: '22:00',
  },
  {
    name: 'Mathew Jackson',
    guest: '4',
    date: '2020-08-29',
    time: '22:00',
  },
  {
    name: 'Mathew Jackson',
    guest: '4',
    date: '2020-08-28',
    time: '17:00',
  },
]

const AdminPage = () => {
  const today = todaysDate()
  const { user, logout } = useContext(AuthContext)
  const [date, setDate] = useState(today)
  const [reservations, setReservations] = useState([])

  useEffect(() => {
    setReservations(fakeData)
  }, [])

  if (user) {
    navigate('/login')
    return null
  }

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
