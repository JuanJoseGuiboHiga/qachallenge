

function validateCryptos(cryptos){
  cryptos.forEach(crypto =>{ 
    cy.findAllByText(crypto).first().click()
    cy.get('.moon-arrow_deposit').click()
    cy.findByText(/oops! Something went wrong/i,{ timeout: 3000 }).should('be.visible')
    cy.findByText(/this transaction exceeds your limit. increase your account limit to continue./i, { timeout: 3000 }).should('be.visible')
    cy.get('body').type('{esc}')
  })
}

function addBeneficiary(){
  cy.visit('https://devmalta.bitso.com/r/user/beneficiaries/add')
  cy.get('#first_name').type("Test1")
  cy.get('#last_name').type("Lastname1")
  cy.get('#dob').type("11/11/1993")
  cy.findByText(/Kinship/i).click()
  cy.get('#react-select-2-option-0').first().click()
  cy.get('#percentage').type("10")
  cy.findByRole('button', { name: /Add/i }).click()
}


describe('deposit', () => {

    it('deposit to first account', () => {
      cy.login("sahop98589@awinceo.com", "Letmein1@")
      cy.findAllByText('btc', { timeout: 5000 }).first().click()
      cy.get('.moon-arrow_deposit').click()
      cy.get('#riskAccepted').click({force: true})
      cy.findByRole('button', { name: /continue/i }).click({force: true})
      cy.get('#riskAccepted').should('not.visible', { timeout: 5000 });
      cy.findByText(/oops! Something went wrong/i, { timeout: 5000 }).should('be.visible')
      cy.findByText(/this transaction exceeds your limit. increase your account limit to continue./i, { timeout: 3000 }).should('be.visible')
      cy.get('body').type('{esc}')
      const cryptos = ['bat', 'bch', 'dai','eth','ltc','mana','tusd','xrp'];
      validateCryptos(cryptos)
      addBeneficiary()
    })


    it('deposit to second account', () => {
      cy.login("sekemaw896@bbsaili.com", "Letmein1@")
      cy.findAllByText('btc', { timeout: 5000 }).first().click()
      cy.get('.moon-arrow_deposit').click()
      cy.get('#riskAccepted').click({force: true})
      cy.findByRole('button', { name: /continue/i }).click({force: true})
      cy.get('#riskAccepted').should('not.visible', { timeout: 5000 });
      cy.findByText(/oops! something went wrong/i, { timeout: 5000 }).should('be.visible', { timeout: 5000 })
      cy.findByText(/this transaction exceeds your limit. increase your account limit to continue./i, { timeout: 3000 }).should('be.visible')
      cy.get('body').type('{esc}')
      const cryptos = ['bat', 'bch', 'dai','eth','ltc','mana','tusd','xrp'];
      validateCryptos(cryptos)
      addBeneficiary()
    })
})