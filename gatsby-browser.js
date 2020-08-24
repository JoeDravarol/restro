import React from 'react'
import { ReservationFormProvider } from './src/context/ReservationFormContext'

export const wrapRootElement = ({ element }) => (
  <ReservationFormProvider>{element}</ReservationFormProvider>
)
