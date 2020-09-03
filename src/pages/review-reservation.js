import React, { useState, useContext } from 'react'
import { Link, navigate } from 'gatsby'

import ReservationEditForm from '../components/ReservationEditForm'
import ReservationFormContext from '../context/ReservationFormContext'
import ReservationReviewInfo from '../components/ReservationReviewInfo'

import { createReservation } from '../utilities/createReservation'
import ReviewModalContent from '../components/ReviewModalContent'

const ReservationReviewPage = () => {
  const { formState, formMethods } = useContext(ReservationFormContext)
  const [editReservation, setEditReservation] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    createReservation(formState)
    setShowModal(true)
    formMethods.resetState()
  }

  const handleEdit = () => setEditReservation(true)

  // Hacky redirect
  if (!formState.email) {
    navigate('/')
    return null
  }

  return (
    <div>
      <main className="wrapper wrapper--review-reservation">
        <div className="reservation-container">
          <Link to="/" title="Back to home">
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
      <ReviewModalContent show={showModal} />
    </div>
  )
}

export default ReservationReviewPage
