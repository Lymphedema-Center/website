describe("The Home Page", function() {
  beforeEach(function() {
    cy.visit("http://localhost:3000");
  });

  it("scrolls to top on LogoLink click", function() {
    cy.get("#__next").scrollTo("bottom");
    cy.get("[data-cy=FixedHeader] > [data-cy=LogoLink]").click();
    expect(globalThis.innerHeight).to.eql(0);
  });
});
