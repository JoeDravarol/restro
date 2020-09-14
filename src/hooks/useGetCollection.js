import { useState, useEffect } from 'react'
import { useFirebase } from './useFirebase'
import { collectIdsAndData } from '../utilities/collectIdsAndData'
import { getItem, setItem, itemInSession } from '../utilities/sessionStorage'

export const useGetCollection = collectionRef => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { firestore } = useFirebase()

  useEffect(() => {
    async function fetchCollection() {
      const ref = firestore.collection(collectionRef)

      try {
        setLoading(true)
        const snapshot = await ref.get()
        const data = snapshot.docs.map(collectIdsAndData)
        setData(data)
        setItem(collectionRef, data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    if (!firestore) return

    if (itemInSession(collectionRef)) {
      const result = getItem(collectionRef)
      setData(result)
      setLoading(false)
    } else {
      fetchCollection()
    }
  }, [collectionRef, firestore])

  return { data, loading, error }
}
