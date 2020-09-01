import { useState, useEffect } from 'react'
import { firestore } from '../firebase'

export const useSubscribeCollection = collectionRef => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      const ref = firestore.collection(collectionRef)
      var unsubscribe = ref.onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        setData(data)
      })
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }

    return function cleanup() {
      unsubscribe()
    }
  }, [collectionRef])

  return { data, loading, error }
}
