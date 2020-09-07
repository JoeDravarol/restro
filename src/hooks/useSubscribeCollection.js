import { useState, useEffect } from 'react'
import { firestore } from '../firebase'
import { collectIdsAndData } from '../utilities/collectIdsAndData'

export const useSubscribeCollection = collectionRef => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const ref = firestore.collection(collectionRef)
    const unsubscribe = ref.onSnapshot(
      snapshot => {
        setLoading(true)
        const data = snapshot.docs.map(collectIdsAndData)

        setData(data)
        setLoading(false)
      },
      error => {
        setError(error)
        setLoading(false)
      }
    )

    return function cleanup() {
      unsubscribe()
    }
  }, [collectionRef])

  return { data, loading, error }
}
