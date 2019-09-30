describe('URI resolver', () => {
  it('recognizes an absolute URI and normalizes it', () => {
    cy.visit('https:adversary.io');
    cy.url().should('eq', 'https://adversary.io/')
  })
})
