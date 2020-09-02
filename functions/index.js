const functions = require('firebase-functions')
const admin = require('firebase-admin')
const sgMail = require('@sendgrid/mail')

const SENDGRID_API_KEY = functions.config().sendgrid.key
const EMAIL_TEMPLATE_ID = functions.config().sendgrid.template
const RESTAURANT_EMAIL = functions.config().restaurant.email

admin.initializeApp()
sgMail.setApiKey(SENDGRID_API_KEY)

exports.sendReservationEmail = functions.firestore
  .document(`reservations/{reservationId}`)
  .onCreate((snap, context) => {
    const reservationInfo = snap.data()
    const { name, email, guest, date, time } = reservationInfo

    const msg = {
      to: email,
      from: RESTAURANT_EMAIL,
      templateId: EMAIL_TEMPLATE_ID,
      subject: `Restro reservation`,
      dynamic_template_data: {
        name,
        guest,
        date,
        time,
      },
    }

    return sgMail.send(msg)
  })
