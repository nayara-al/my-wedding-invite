describe('test Contador component', () => {
  it('renders the component and elements', () => {
    cy.visit('/')
    cy.get('[data-testid="cypress-title-contagem"]').should('exist')
    cy.get('[data-testid="cypress-contador-components"]').should('exist')
    cy.get('[data-testid="cypress-contador-components"] > div').eq(0).should('contain.text', "dia");
    cy.get('[data-testid="cypress-contador-components"] > div').eq(1).should('contain.text', "hora");
    cy.get('[data-testid="cypress-contador-components"] > div').eq(2).should('contain.text', "minutos");
    cy.get('[data-testid="cypress-contador-components"] > div').eq(3).should('contain.text', "segundos");
  })
})