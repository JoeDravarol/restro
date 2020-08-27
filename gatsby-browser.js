import React from 'react'
import { ReservationFormProvider } from './src/context/ReservationFormContext'
import { AuthProvider } from './src/context/AuthContext'

export const wrapRootElement = ({ element }) => (
  <AuthProvider>
    <ReservationFormProvider>{element}</ReservationFormProvider>
  </AuthProvider>
)
