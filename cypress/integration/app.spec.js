const location = "http://localhost:3000";

describe("App Test", () => {
  it("Search button should be disabled", () => {
    cy.visit(location);
    cy.get("button[data-testid='search']").should("be.disabled");
  });

  it("Input works correctly", () => {
    cy.get("input")
      .click()
      .type("thiswillprobablyreturnnoresults")
      .should("have.value", "thiswillprobablyreturnnoresults");
  });

  it("Search button should be enabled", () => {
    cy.get("button[data-testid='search']").should("not.be.disabled");
  });

  it("Should not have error", () => {
    cy.get("[data-testid='search-error']").should("not.exist");
  });

  it("Should not find results", () => {
    cy.get("button[data-testid='search']").click();
    cy.get("[data-testid='search-error']");
  });

  it("Should find results", () => {
    cy.get("input").click().clear().type("test");
    cy.get("button[data-testid='search']").click();
    cy.get("[data-testid='results-stack']");
  });

  it("Should be on first page", () => {
    cy.get("[data-testid='page-indicator']")
      .invoke("text")
      .then((text) => text.slice(0, 1))
      .should("equal", "1");
  });

  it("Left arrows should be disabled", () => {
    cy.get("button[data-testid='previous-btn']").should("be.disabled");
    cy.get("button[data-testid='first-btn']").should("be.disabled");
  });

  it("Right arrows should be enabled", () => {
    cy.get("button[data-testid='next-btn']").should("not.be.disabled");
    cy.get("button[data-testid='last-btn']").should("not.be.disabled");
  });

  it("Should be able to go to second page", () => {
    cy.get("button[data-testid='next-btn']").click().should("not.be.disabled");
    cy.get("[data-testid='page-indicator']")
      .invoke("text")
      .then((text) => text.slice(0, 1))
      .should("equal", "2");
  });

  it("All arrows should be enabled", () => {
    cy.get("button[data-testid='last-btn']").should("not.be.disabled");
    cy.get("button[data-testid='previous-btn']").should("not.be.disabled");
    cy.get("button[data-testid='first-btn']").should("not.be.disabled");
  });

  it("Should be able to go to last page", () => {
    cy.get("button[data-testid='last-btn']").click();

    cy.get("[data-testid='page-indicator']")
      .invoke("text")
      .then((text) => {
        const [start, end] = text.split("/");
        return start === end;
      })
      .should("equal", true);
  });

  it("Should be able to go to first page", () => {
    cy.get("button[data-testid='first-btn']").click();

    cy.get("[data-testid='page-indicator']")
      .invoke("text")
      .then((text) => {
        const [start] = text.split("/");
        return start;
      })
      .should("equal", "1");
  });

  it("Theme should be dark", () => {
    cy.get("[data-testid='sun']");
    cy.get("[data-testid='moon']").should("not.exist");
  });

  it("Should be able to set light theme", () => {
    cy.get("[data-testid='sun']").click();
    cy.get("[data-testid='sun']").should("not.exist");
    cy.get("[data-testid='moon']");
  });

  it("Direction should be ltr", () => {
    cy.get("[data-testid='rtl-dir']").should("have.text", "rtl");
  });

  it("Should be able to set rtl direction", () => {
    cy.get("[data-testid='rtl-dir']").click().should("have.text", "ltr");
  });
});
