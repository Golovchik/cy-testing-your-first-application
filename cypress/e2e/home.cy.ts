describe('home spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('the h1 contains the correct text', () => {
    cy.get('[data-test="hero-heading"]')
      .should('exist')
      .contains('Testing Next.js Applications with Cypress')
  })

  it('the feature on the homepage are correct', () => {
    const dtLocator = cy.get('dt')
    console.log(dtLocator);
      cy.get('dt').eq(0).contains(/4 courses/i)
      cy.get('dt').eq(1).contains('25+ Lessons')
      cy.get('dt').eq(2).contains('Free and Open Source')
  })
})