context('home page', () => {
  const host = Cypress.env('host')

  beforeEach(() => {
    cy.visit(host)
  })

  it('has ketosis in the first h1', () => {
  	cy.get('h1').should('contain','Ketosis')
  })

  it('matches the known snapshot', () => {
  	cy.screenshot()
  })
})