describe("test banner", () => {
  it("renders the component Banner in the Screen", () => {
    cy.get('[data-testid="cypress-banner"]').should("exist");
    cy.get('[data-testid="cypress-banner-nome"]')
      .should("exist")
      .should("have.text", "Nayara e Victor");
  });
});
