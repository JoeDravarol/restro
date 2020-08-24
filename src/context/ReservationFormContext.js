import React, { useState, createContext } from 'react'

const ReservationFormContext = createContext()
// Temporary data
let today = new Date().toISOString().substr(0, 10)
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

  const formMethods = {
    handleChange,
  }

  return (
    <ReservationFormContext.Provider value={{ formState, formMethods }}>
      {children}
    </ReservationFormContext.Provider>
  )
}

export default ReservationFormContext
