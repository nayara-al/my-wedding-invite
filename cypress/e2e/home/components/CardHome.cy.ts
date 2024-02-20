describe("test Card Home", () => {
  it("renders the component CardHome in the Screen", () => {
    cy.visit('/')
    cy.get('[data-testid="cypress-image-nossa-historia"]').should("exist");
    cy.get('[data-testid="cypress-image-salvar-data"]').should("exist");
  });
  it("redirects to correct page on link click", () => {
    cy.visit('/')
    cy.get('[data-testid="cypress-link-nossa-historia"]').click();
    cy.url().should("include", "/nossa-historia");
  
    cy.go("back");
  
    cy.get('[data-testid="cypress-link-salvar-data"]').click();
    cy.url().should("include", "/salvar-data");
  });
});
