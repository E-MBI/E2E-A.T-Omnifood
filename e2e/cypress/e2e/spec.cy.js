describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://mahmoud-ebrahim-omnifood.surge.sh/");
    cy.get("header button a").click();
  });

  it("type in username Mahmoud Ebrhim", () => {
    cy.get("#userName").focus().type("Mahmoud Ebrhim", { delay: 250 });
    cy.eyesCheckWindow();
  });
});
