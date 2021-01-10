/// <reference types="Cypress" />

describe('Login to Dashboard', () => {
  beforeEach(() => {
    cy.visit('/')

    // It clicks on toggle navbar button to reveal the nav links (Mobile)
    cy.findByRole('button', { name: 'toggle menu' })
      .click()
    
    cy.findByText(/^Dashboard$/)
      .click()

    // It checks if it's on the login page
    cy.url().should('include', '/login')
    cy.contains('Login')
  })

  it('login as guest', () => {
    cy.findByRole('button', { name: 'Login as guest' })
      .click()
    
    cy.findByText(/Today's Reservation/i)

    // ANTI-PATTERN
    // Cypress does not clear session storage 
    // on each test: clearing by login out
    cy.findByRole('button', { name: 'toggle menu' })
      .click()
    cy.findByText(/logout/i)
      .click()
  })

  it('login with credentials', () => {
    const email = 'preview@restro.co.uk'
    const password = 'guest123'

    // it login with credentials
    cy.findByLabelText(/Email/i)
      .type(email)

    cy.findByLabelText(/Password/i)
      .type(password)

    cy.findByRole('button', { name: 'Login' })
      .click()

    // it check if user is on dashboard
    cy.url().should('include', '/admin')
    cy.findByText(/Today's Reservation/i)

    // it navigate back to homepage
    cy.findByText(/^Restro$/)
      .click()

    cy.url().should('eq', 'http://localhost:8000/')

    // it navigate back to dashboard
    cy.findByRole('button', { name: 'toggle menu' })
      .click()
    
    cy.findByText(/^Dashboard$/)
      .click()

    // user token is saved in session storage
    // so the user isn't required to re-login
    cy.url().should('include', '/admin')
    cy.findByText(/Today's Reservation/i)

    // ANTI-PATTERN
    // Cypress does not clear session storage 
    // on each test: clearing by login out
    cy.findByRole('button', { name: 'toggle menu' })
      .click()
    cy.findByText(/logout/i)
      .click()
  })
})