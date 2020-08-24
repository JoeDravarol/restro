import firebase, { firestore } from '../firebase'

export const createReservation = async ({ name, email, guest, date, time }) => {
  // Ideally should throw an error
  if (!email) return

  const reservationRef = firestore.collection('reservations')
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  const reservation = {
    createdAt: timestamp(),
    name,
    email,
    guest,
    reservationDate: date,
    reservationTime: time,
    canceledReservation: false,
    sentReservation: false,
  }

  reservationRef.add(reservation)
}
