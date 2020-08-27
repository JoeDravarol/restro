import React, { useState, createContext, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
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
  }, [])

  const login = async (email, password) => {
    return await auth.signInWithEmailAndPassword(email, password)
  }

  const logout = async () => {
    return await auth.signOut()
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
