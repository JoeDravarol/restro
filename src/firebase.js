import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export const config = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
}

let firebaseInstance = null

// https://invertase.io/blog/firebase-with-gatsby
export default function getFirebase() {
  if (!firebaseInstance) {
    firebaseInstance = firebase.initializeApp(config)
  }

  return firebaseInstance
}
