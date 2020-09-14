import { useState, useEffect } from 'react'
import { useFirebase } from './useFirebase'
import { collectIdsAndData } from '../utilities/collectIdsAndData'

export const useSubscribeCollection = collectionRef => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { firestore } = useFirebase()

  useEffect(() => {
    if (!firestore) return

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
  }, [collectionRef, firestore])

  return { data, loading, error }
}
