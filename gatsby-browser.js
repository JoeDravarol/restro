import React from 'react'
import { ReservationFormProvider } from './src/context/ReservationFormContext'
import { AuthProvider } from './src/context/AuthContext'
import './src/styles/main.scss'

export const wrapRootElement = ({ element }) => (
  <AuthProvider>
    <ReservationFormProvider>{element}</ReservationFormProvider>
  </AuthProvider>
)
