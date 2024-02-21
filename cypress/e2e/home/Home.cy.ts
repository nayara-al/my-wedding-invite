describe('test Home page components', () => {
  it('renders the components on the Home page', () => {
    cy.visit('/'); 
    
    cy.get('[data-testid="cypress-banner"]').should('exist');
    cy.get('[data-testid="cypress-cards-home"]').should('exist');
    cy.get('[data-testid="cypress-contador"]').should('exist');
    cy.get('[data-testid="cypress-sectioncasamento-div-pai"]').should('exist');
  });
});
