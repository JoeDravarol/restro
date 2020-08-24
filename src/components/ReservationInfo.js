import React from 'react'

const ReservationInfo = ({ handleEdit, handleSubmit, reservationInfo }) => {
  return (
    <>
      <div className="reservation-info">
        <h2 className="reservation-review-heading">
          {reservationInfo.name}'s reservation
        </h2>

        <div className="infos">
          <div>
            <h3 className="reservation-info__title">
              {reservationInfo.guest > 1 ? 'Guests' : 'Guest'}
            </h3>
            <p className="reservation-info__desc">{reservationInfo.guest}</p>
          </div>

          <div>
            <h3 className="reservation-info__title">Date</h3>
            <p className="reservation-info__desc">{reservationInfo.date}</p>
          </div>

          <div>
            <h3 className="reservation-info__title">Time</h3>
            <p className="reservation-info__desc">{reservationInfo.time}</p>
          </div>
        </div>

        <p className="reservation-notice">
          Table is kept for 15 minutes after reservation time. We appreaciate
          you being on time.
        </p>

        <footer className="review-reservation__footer">
          <button
            className="button button--text-only"
            type="button"
            onClick={handleEdit}
          >
            Edit reservation
          </button>
          <button type="submit" className="button" onClick={handleSubmit}>
            Confirm reservation
          </button>
        </footer>
      </div>
    </>
  )
}

export default ReservationInfo
