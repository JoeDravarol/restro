/// <reference types="Cypress" />

describe('reservationForm', () => {
  it('reservation is submitted and shown in dashboard', () => {
    cy.visit('/')

    const name = 'John Doe'
    const email = 'johndoe@testing.com'
    const invalidGuestValue = 12;
    const guestValue = 2;

    // It should throw HTML5 validation error
    cy.findByLabelText(/Guest/i)
      .clear()
      .type(invalidGuestValue)

    cy.findByLabelText(/Name/i)
      .type(name)

    cy.findByLabelText(/Email/i)
      .type(email)

    cy.findByRole('button', { name: /reserve table/i })
      .click()

    // It checks for HTML5 validation error
    cy.get('input:invalid').should('have.length', 1)

    cy.findByLabelText(/Guest/i)
      .clear()
      .type(guestValue)
    
    cy.findByRole('button', { name: /reserve table/i })
      .click()

    // it send user to review reservation
    cy.url().should('include', '/review-reservation')
    
    const reservationHeading = new RegExp(`${name}'s Reservation`, 'i')
    cy.findByText(reservationHeading)

    // it confirms reservation
    cy.findByRole('button', { name: /confirm/i })
      .click()
    cy.findByText('Thank you for your reservation.')

    // it check for the reservation in dashboard
    cy.visit('/login')

    cy.findByRole('button', { name: 'Login as guest' })
      .click()
    
    cy.findAllByText(reservationHeading)

    // ANTI-PATTERN
    // Cypress does not clear session storage 
    // on each test: clearing by login out
    cy.findByRole('button', { name: 'toggle menu' })
      .click()
    cy.findByText(/logout/i)
      .click()
  })

  it('edit reservation works correctly', () => {
    cy.visit('/')

    const name = 'Fake user'
    const email = 'fake@example.com'

    cy.findByLabelText(/Guest/i).should('have.value', '1')

    cy.findByLabelText(/Name/i)
      .type(name)

    cy.findByLabelText(/Email/i)
      .type(email)

    cy.findByRole('button', { name: /reserve table/i })
      .click()

    // it send user to review reservation
    cy.url().should('include', '/review-reservation')
    
    const reservationHeading = new RegExp(`${name}'s Reservation`, 'i')
    cy.findByText(reservationHeading)

    // it goes to edit reservation
    cy.findByRole('button', { name: /edit/i })
      .click()
    cy.findByText(/Edit Reservation/i)

    const newName = 'Bob Ross'
    const newEmail = 'bross@testing.com'
    const guest = 3

    cy.findByLabelText(/Name/i)
      .clear()
      .type(newName)
      .should('have.value', newName)

    // Bug: .clear() cause the test to redirect back to home page
    cy.findByLabelText(/Email/i)
      .type('{selectall}')
      .type(newEmail)

    cy.findByLabelText(/Guest/i)
      .clear()
      .type(guest)
      .should('have.value', guest)

    // it confirms edit reservation
    cy.findByRole('button', { name: /confirm/i })
      .click()
    cy.findByText('Thank you for your reservation.')

    // it check for the reservation in dashboard
    cy.visit('/login')

    cy.findByRole('button', { name: 'Login as guest' })
      .click()
    
    const newReservationHeading = new RegExp(`${newName}'s Reservation`, 'i')
    cy.findAllByText(newReservationHeading)

    // ANTI-PATTERN
    // Cypress does not clear session storage 
    // on each test: clearing by login out
    cy.findByRole('button', { name: 'toggle menu' })
      .click()
    cy.findByText(/logout/i)
      .click()
  })
})