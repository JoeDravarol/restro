import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  projectId: process.env.FIREBASE_PROJECT_ID,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
}

firebase.initializeApp(config)

export const firestore = firebase.firestore()
export const auth = firebase.auth()

export default firebase
