import '@testing-library/cypress/add-commands';

Cypress.Commands.add('setEnglish', () => {
  cy.visit('https://devmalta.bitso.com/register')
  cy.get('.moon-language').click()
  cy.findByText(/english/i).click()
})

Cypress.Commands.add('login', (user, pwd) => {
  cy.viewport(1280, 800) 
  cy.visit('https://devmalta.bitso.com/login')
  cy.get('.moon-language').click()
  cy.findByText(/english/i).click()
  cy.get('#client_id').type(user) // Use here the first test email
  cy.get('#password').type(pwd)
  cy.findByRole('button', { name: /Log in/i }).click()
  cy.findByText(/skip/i).click()
})