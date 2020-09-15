import React, { useState, createContext, useEffect } from 'react'
import { todaysDate } from '../utilities/date'

const ReservationFormContext = createContext()

const initialState = {
  name: '',
  email: '',
  guest: 1,
  date: todaysDate(),
  time: '12:00',
}

export const ReservationFormProvider = ({ children }) => {
  const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    setFormState(prevState => ({ ...prevState, date: todaysDate() }))
  }, [])

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
