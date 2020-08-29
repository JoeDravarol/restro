import React from 'react'

const ReservationDashboardInfo = ({ name, guest, date, time }) => (
  <section className="reservation-data">
    <h3 className="reservation-data__name">{name}'s Reservation</h3>

    <dl className="reservation-data__dl">
      <dt className="reservation-data__dt">Guests</dt>
      <dd className="reservation-data__dd">{guest}</dd>

      <dt className="reservation-data__dt">Time</dt>
      <dd className="reservation-data__dd">{time}</dd>

      <dt className="reservation-data__dt">Date</dt>
      <dd className="reservation-data__dd">{date}</dd>
    </dl>
  </section>
)

export default ReservationDashboardInfo
