const functions = require('firebase-functions')
const admin = require('firebase-admin')
const sgMail = require('@sendgrid/mail')

admin.initializeApp()
sgMail.setApiKey(functions.config().sendgrid.key)

exports.sendReservationEmail = functions.firestore
  .document(`reservations/{reservationId}`)
  .onCreate((snap, context) => {
    const reservationInfo = snap.data()
    const { name, email, guest, date, time } = reservationInfo
    const msgBody = `Your reservation at Restro for ${guest} guests on ${date} at ${time} has been confirmed. Table is kept for 15 minutes after reservation time. We appreaciate
    you being on time.`

    const msg = {
      to: email,
      from: 'info@restro.co.uk',
      subject: `${name}'s Restro reservation`,
      text: msgBody,
      html: `<strong>${msgBody}</strong>`,
    }

    ;(async () => {
      try {
        await sgMail.send(msg)
      } catch (error) {
        console.error(error)

        if (error.response) {
          console.error(error.response.body)
        }
      }
    })()
  })
