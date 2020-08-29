import React, { useState, useContext } from 'react'
import { Link, navigate } from 'gatsby'

import ReservationEditForm from '../components/ReservationEditForm'
import ReservationFormContext from '../context/ReservationFormContext'
import ReservationReviewInfo from '../components/ReservationReviewInfo'

import { createReservation } from '../utilities/createReservation'

const ReservationReviewPage = ({ location }) => {
  const { formState, formMethods } = useContext(ReservationFormContext)
  const [editReservation, setEditReservation] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    createReservation(formState)
    formMethods.resetState()
    navigate('/')
    console.log('Thank you for your reservation, we will email you shortly.')
  }

  const handleEdit = () => setEditReservation(true)

  return (
    <>
      <main className="wrapper wrapper--review-reservation">
        <div className="reservation-container">
          <Link to="/" title="home">
            <h1 className="restaurant-name">Restro</h1>
          </Link>

          {editReservation ? (
            <>
              <h2 className="reservation-review-heading">Edit reservation</h2>

              <ReservationEditForm
                handleSubmit={handleSubmit}
                handleChange={formMethods.handleChange}
                reservationInfo={formState}
              />
            </>
          ) : (
            <ReservationReviewInfo
              handleEdit={handleEdit}
              handleSubmit={handleSubmit}
              reservationInfo={formState}
            />
          )}
        </div>
      </main>
    </>
  )
}

export default ReservationReviewPage
