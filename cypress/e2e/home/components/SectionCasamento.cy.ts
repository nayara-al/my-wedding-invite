describe('test SectionCasamento component', () => {
  it('renders the component and elements', () => {
    cy.visit('/'); // Seu caminho de rota pode variar
    
    // Verificar a existência do contêiner pai
    cy.get('[data-testid="cypress-sectioncasamento-div-pai"]').should('exist');
    
    // Verificar a existência de seções
    cy.get('[data-testid="cypress-header-wedding-info"]').should('exist');
    
    // Verificar a existência de elementos específicos
    cy.get('[data-testid="cypress-data-evento"]').should('exist');
    cy.get('[data-testid="cypress-local-evento"]').should('exist');
    cy.get('[data-testid="cypress-info-casal"]').should('exist');
    cy.get('[data-testid="cypress-info-evento"]').should('exist');
    cy.get('[data-testid="cypress-confirma-info"]').should('exist');
  });
});

describe('test SectionCasamento component', () => {
  it('renders the correct content', () => {
    cy.visit('/');
    
    cy.get('[data-testid="cypress-header-wedding-info"]').within(() => {
      cy.get('h2.font-gwendolyn.text-5xl').should('contain.text', 'Cerimônia');
      cy.get('[data-testid="cypress-data-evento"]').should('contain.text', 'Data: 16/12/2024');
      cy.get('[data-testid="cypress-local-evento"]').should('contain.text', 'Local: Salão de Festas');
    });
  });
});

