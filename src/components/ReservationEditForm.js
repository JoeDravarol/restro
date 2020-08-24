import React from 'react'

const ReservationEditForm = ({
  handleSubmit,
  handleChange,
  reservationInfo,
}) => {
  return (
    <form className="reservation-edit__form" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter Your Name"
          value={reservationInfo.name}
          onChange={handleChange}
          required
        />
      </label>

      <label htmlFor="email">
        Email
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter Your Email"
          value={reservationInfo.email}
          onChange={handleChange}
          required
        />
      </label>

      <label htmlFor="date">
        Date
        <input
          id="date"
          name="date"
          type="date"
          value={reservationInfo.date}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="time">
        Time
        <input
          id="time"
          name="time"
          type="time"
          min="12:00"
          max="23:00"
          value={reservationInfo.time}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="guest">
        Guest
        <input
          id="guest"
          name="guest"
          type="number"
          min="1"
          max="6"
          value={reservationInfo.guest}
          onChange={handleChange}
        />
      </label>

      <button
        className="button confirm-reservation__button--edit"
        type="submit"
      >
        Confirm reservation
      </button>
    </form>
  )
}

export default ReservationEditForm
