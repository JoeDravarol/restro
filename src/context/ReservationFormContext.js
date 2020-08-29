import React, { useState, createContext } from 'react'
import { todaysDate } from '../utilities/date'

const ReservationFormContext = createContext()
// Temporary data
let today = todaysDate()
const initialState = {
  name: '',
  email: '',
  guest: 1,
  date: today,
  time: '12:00',
}

export const ReservationFormProvider = ({ children }) => {
  const [formState, setFormState] = useState(initialState)

  const handleChange = e => {
    const { name, value } = e.target

    setFormState(prevState => ({ ...prevState, [name]: value }))
  }

  const resetState = () => {
    setFormState(initialState)
  }

  const formMethods = {
    handleChange,
    resetState,
  }

  return (
    <ReservationFormContext.Provider value={{ formState, formMethods }}>
      {children}
    </ReservationFormContext.Provider>
  )
}

export default ReservationFormContext
