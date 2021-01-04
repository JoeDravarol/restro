import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import ReservationReviewInfo from '../ReservationReviewInfo'
import { formatDateToDMY } from '../../utilities/date'

describe('<ReservationReviewInfo />', () => {
  test('renders correctly with props given', () => {
    const reservationInfo = {
      name: 'Bob',
      guest: '2',
      date: '2021-01-01',
      time: '18:00',
    }

    const { getByText } = render(<ReservationReviewInfo reservationInfo={reservationInfo} />)

    const DateToDMY = formatDateToDMY(reservationInfo.date)

    expect(getByText(/Bob/i)).toBeInTheDocument()
    expect(getByText(reservationInfo.guest)).toBeInTheDocument()
    expect(getByText(DateToDMY)).toBeInTheDocument()
    expect(getByText(reservationInfo.time)).toBeInTheDocument()
  })

  test('dumb component: renders when given invalid props', () => {
    const reservationInfo = {
      name: 'John',
      guest: '-2',
      date: '1984-06-10',
      time: '12:00'
    }

    const { getByText } = render(<ReservationReviewInfo reservationInfo={reservationInfo} />)

    const DateToDMY = formatDateToDMY(reservationInfo.date)

    expect(getByText(/John/i)).toBeInTheDocument()
    expect(getByText(reservationInfo.guest)).toBeInTheDocument()
    expect(getByText(DateToDMY)).toBeInTheDocument()
    expect(getByText(reservationInfo.time)).toBeInTheDocument()
  })

  test('calls the handleEdit callback handler', () => {
    const handleEdit = jest.fn()
    const reservationInfo = {
      name: 'Bob',
      guest: '2',
      date: '2021-01-01',
      time: '18:00',
    }

    render(<ReservationReviewInfo reservationInfo={reservationInfo} handleEdit={handleEdit} />)
    const button = screen.getByRole('button', { name: /Edit Reservation/i })
    fireEvent.click(button)

    expect(handleEdit).toHaveBeenCalledTimes(1)
  })

  test('calls the handleSubmit callback handler', () => {
    const handleSubmit = jest.fn()
    const reservationInfo = {
      name: 'Bob',
      guest: '2',
      date: '2021-01-01',
      time: '18:00',
    }

    render(<ReservationReviewInfo reservationInfo={reservationInfo} handleSubmit={handleSubmit} />)
    const button = screen.getByRole('button', { name: /Confirm Reservation/i })
    fireEvent.click(button)

    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })
})