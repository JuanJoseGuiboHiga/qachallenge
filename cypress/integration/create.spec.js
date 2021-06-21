describe('create accounts', () => {
  beforeEach(() => {
    cy.setEnglish()
    cy.findByText("Peru").click()
  })
    it('Create a new account from Argentina', () => {
      cy.findByText("Argentina").click()
      cy.findByRole('textbox', { name: /email/i }).type("sahop98589@awinceo.com") // Add here your first test email
      cy.get('#password').type("Letmein1@")
      cy.get('#password_confirmation').type("Letmein1@")
      cy.get('#accept_terms').click({force: true})
      cy.get('#accept_privacy').click({force: true})
      cy.findByRole('button', { name: /start/i }).click()
    })
 
    it('Create a new account from Mexico', () => {
      cy.findByText("Mexico").click()
      cy.findByRole('textbox', { name: /email/i }).type("sekemaw896@bbsaili.com") // Add here your second test email
      cy.get('#password').type("Letmein1@")
      cy.get('#password_confirmation').type("Letmein1@")
      cy.get('#accept_terms').click({force: true})
      cy.get('#accept_privacy').click({force: true})
      cy.get('#accept_nvio_terms').click({force: true})
      cy.findByRole('button', { name: /start/i }).click()
    }) 
  })
