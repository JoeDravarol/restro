import React, { useState, createContext, useEffect } from 'react'
import { useFirebase } from '../hooks/useFirebase'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const { auth } = useFirebase()

  useEffect(() => {
    if (!auth) return

    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      if (user) {
        const { uid, isAnonymous } = user
        return setUser({ uid, isAnonymous })
      }
      setUser(null)
    })

    return function cleanup() {
      unsubscribeFromAuth()
    }
  }, [auth])

  const login = async (email, password) => {
    return await auth.signInWithEmailAndPassword(email, password)
  }

  const logout = async () => {
    return await auth.signOut()
  }

  const loginAsGuest = async () => {
    return await auth.signInAnonymously()
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loginAsGuest }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
