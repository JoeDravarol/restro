import { useState, useEffect } from 'react'
import getFirebase from '../firebase'

export const useFirebase = () => {
  const [firebase, setFirebase] = useState(null)
  const [firestore, setFirestore] = useState(null)
  const [auth, setAuth] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFirebase(getFirebase())
    }
  }, [])

  useEffect(() => {
    if (!firebase) return

    const firestore = firebase.firestore()
    const auth = firebase.auth()
    setFirestore(firestore)
    setAuth(auth)
  }, [firebase])

  return { firestore, auth }
}
