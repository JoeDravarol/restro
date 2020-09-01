import React, { useEffect, useState } from 'react'
import ReservationDashboardInfo from './ReservationDashboardInfo'
import { formatDateToDMY } from '../utilities/date'

const ReservationDashboardInfoList = ({ date, reservations }) => {
  const [filteredReservations, setFilteredReservation] = useState([])

  useEffect(() => {
    const filteredByDate = reservations.filter(
      reservation => reservation.date === date
    )
    const sortedByTimeAscending = filteredByDate.sort(
      (a, b) => a.time >= b.time
    )

    setFilteredReservation(sortedByTimeAscending)
  }, [date, reservations])

  if (filteredReservations.length === 0) {
    return <p>There are no reservations...</p>
  }

  return (
    <>
      {filteredReservations.map(reservation => (
        <ReservationDashboardInfo
          key={reservation.id}
          {...reservation}
          date={formatDateToDMY(reservation.date)}
        />
      ))}
    </>
  )
}

export default ReservationDashboardInfoList
