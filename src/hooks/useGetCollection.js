import { useState, useEffect } from 'react'
import { firestore } from '../firebase'
import { collectIdsAndData } from '../utilities/collectIdsAndData'
import { getItem, setItem, itemInSession } from '../utilities/sessionStorage'

export const useGetCollection = collectionRef => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

    if (itemInSession(collectionRef)) {
      const result = getItem(collectionRef)
      setData(result)
      setLoading(false)
    } else {
      fetchCollection()
    }
  }, [collectionRef])

  return { data, loading, error }
}
