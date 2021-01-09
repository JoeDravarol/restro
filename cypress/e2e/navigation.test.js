/// <reference types="Cypress" />

describe("Navigiating through pages", () => {
  it("Navigate to Menu page", () => {
    cy.visit('/')

    // it clicks on toggle navbar button to reveal the nav links (Mobile)
    cy.findByRole('button', { name: 'toggle menu' })
      .click()
    
    cy.findByText(/^Menu$/)
      .click()

    // Should be on a new URL
    cy.url().should('include', '/menu')

    cy.findByText('Appetizers')
    cy.findByText('Mains')
    cy.findByText('Desserts')
  })

  it("Navigating to Dashboard should redirect to Login page", () => {
    cy.visit('/')

    // it clicks on toggle navbar button to reveal the nav links (Mobile)
    cy.findByRole('button', { name: 'toggle menu' })
      .click()

    cy.findByText(/Dashboard/)
      .click()

    // Should be redirected to login url
    cy.url().should('not.include', '/dashboard')
    cy.url().should('include', '/login')

    cy.contains('Login')
  })

  it("Visiting review-reservation page via url should not be possible", () => {
    cy.visit('/review-reservation')

    cy.url().should('not.include', '/review-reservation')
    cy.url().should('eq', 'http://localhost:8000/')

    cy.findByText(/Choosing quality food/i)
  })
})
