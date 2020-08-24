import React from 'react'

function ReservationForm({
  handleSubmit,
  handleChange,
  name,
  email,
  date,
  time,
  guest,
}) {
  return (
    <form onSubmit={handleSubmit} className="reservation__form">
      <div className="field-container">
        <label className="label label--caret label--date" htmlFor="date">
          Date
        </label>
        <input
          name="date"
          id="date"
          type="date"
          value={date}
          onChange={handleChange}
        />
      </div>

      <div className="field-container">
        <label className="label label--caret" htmlFor="time">
          Time
        </label>
        <input
          name="time"
          id="time"
          type="time"
          min="12:00"
          max="23:00"
          value={time}
          onChange={handleChange}
        />
      </div>

      <div className="field-container">
        <label className="label label--caret" htmlFor="guest">
          Guest
        </label>
        <input
          name="guest"
          id="guest"
          type="number"
          min="1"
          max="6"
          value={guest}
          onChange={handleChange}
        />
      </div>

      <label className="label label--desktop-large" htmlFor="name">
        Name
        <input
          name="name"
          id="name"
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>

      <label className="label label--large" htmlFor="email">
        Email
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={handleChange}
          required
        />
      </label>

      <button className="reservation__submit">Reserve Table</button>
    </form>
  )
}

export default ReservationForm
