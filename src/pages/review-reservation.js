import React, { useState, useContext } from 'react'
import { Link, navigate } from 'gatsby'

import ReservationEditForm from '../components/ReservationEditForm'
import ReservationFormContext from '../context/ReservationFormContext'
import ReservationReviewInfo from '../components/ReservationReviewInfo'
import SEO from '../components/Seo'
import ReviewModalContent from '../components/ReviewModalContent'

import { useFirebase } from '../hooks/useFirebase'

const ReservationReviewPage = () => {
  const { formState, formMethods } = useContext(ReservationFormContext)
  const [editReservation, setEditReservation] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const { firestore } = useFirebase()

  const createReservation = ({ name, email, guest, date, time }) => {
    // Ideally should throw an error
    if (!email) return

    const reservationRef = firestore.collection('reservations')

    const reservation = {
      createdAt: new Date(),
      name,
      email,
      guest,
      date,
      time,
    }

    reservationRef.add(reservation)
  }

  const handleSubmit = e => {
    e.preventDefault()

    createReservation(formState)
    setShowModal(true)
    formMethods.resetState()
  }

  const handleEdit = () => setEditReservation(true)

  // Hacky redirect
  if (!formState.email && !showModal) {
    if (typeof window !== 'undefined') {
      navigate('/')
      return null
    }
  }

  return (
    <>
      <SEO title="Review Reservation" />
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
    </>
  )
}

export default ReservationReviewPage
