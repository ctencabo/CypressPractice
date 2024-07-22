describe('Navigation to web application', () => {
  it('Test Case 1 - Happy Flow', () => {
    // steps
    cy.visit('https://demo.guru99.com/test/newtours/index.php')

    cy.title().should('eq', 'Welcome: Mercury Tours')

  })
})