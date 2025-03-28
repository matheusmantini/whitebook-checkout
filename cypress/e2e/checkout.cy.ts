describe("Checkout with plans subscription", () => {
  beforeEach(() => {
    cy.wrap(Cypress.env("BASE_API_URL")).as("baseApiUrl");
    cy.wrap(Cypress.env("BASE_HOST_URL")).as("baseHostUrl");

    cy.get("@baseHostUrl").then((baseHostUrl) => {
      cy.visit(baseHostUrl.toString());
      cy.contains("a", "Ir para o Checkout").click();
      cy.url().should("eq", `${baseHostUrl}/checkout`);
    });
  });

  it("should complete and finish a subscription successfully with default plan option 1 chosen", () => {
    cy.get("button")
      .contains("Finalizar Pagamento")
      .should("be.visible")
      .and("be.disabled");

    cy.get('input[name="cardNumber"]').type("4111111111111111");
    cy.get('input[name="cardExpirationDate"]').type("1129");
    cy.get('input[name="cardCVV"]').type("456");
    cy.get('input[name="holderName"]').type("John Doe");
    cy.get('input[name="CPF"]').type("28315487051");
    cy.get("select").select("12");

    cy.get("button")
      .contains("Finalizar Pagamento")
      .should("not.be.disabled")
      .click();

    cy.get("div")
      .contains("Assinatura realizada com sucesso!")
      .should("be.visible");

    cy.get("@baseHostUrl").then((baseHostUrl) => {
      cy.url().should("eq", `${baseHostUrl}/checkout/confirmation`);
    });

    cy.get("h3").contains("Parabéns!").should("be.visible");

    cy.contains("p", "Sua assinatura foi realizada com sucesso.")
      .should("be.visible")
      .and("have.html", "Sua assinatura foi realizada <br> com sucesso.");
  });

  it("should complete and finish a subscription successfully with default plan option 2 chosen", () => {
    cy.get("button")
      .contains("Finalizar Pagamento")
      .should("be.visible")
      .and("be.disabled");

    cy.contains("h3", "Premium Anual | À Vista")
      .should("be.visible")
      .and("have.text", "Premium Anual | À Vista");

    cy.contains('[role="button"]', "Premium Anual | À Vista").click();

    cy.get('select[name="installments"]').should("not.exist");

    cy.get('input[name="cardNumber"]').type("4111111111111111");
    cy.get('input[name="cardExpirationDate"]').type("1129");
    cy.get('input[name="cardCVV"]').type("456");
    cy.get('input[name="holderName"]').type("John Doe");
    cy.get('input[name="CPF"]').type("28315487051");

    cy.get("button")
      .contains("Finalizar Pagamento")
      .should("not.be.disabled")
      .click();

    cy.get("div")
      .contains("Assinatura realizada com sucesso!")
      .should("be.visible");

    cy.get("@baseHostUrl").then((baseHostUrl) => {
      cy.url().should("eq", `${baseHostUrl}/checkout/confirmation`);
    });

    cy.get('[data-testid="subscribed-plan"]')
      .contains("h3", "Premium Anual | À Vista")
      .should("be.visible")
      .and("have.text", "Premium Anual | À Vista");

    cy.get('[data-testid="subscribed-plan"]')
      .contains("p", "1x")
      .should("be.visible");

    cy.get("h3").contains("Parabéns!").should("be.visible");

    cy.contains("p", "Sua assinatura foi realizada com sucesso.")
      .should("be.visible")
      .and("have.html", "Sua assinatura foi realizada <br> com sucesso.");
  });

  it("should show an alert with error message when subscription fails", () => {
    cy.get("@baseApiUrl").then((baseApiUrl) => {
      cy.intercept("POST", `${baseApiUrl}/subscription`, {
        statusCode: 500,
        body: { message: "Erro no processamento do pagamento" },
      }).as("failedPayment");
    });

    cy.get("button")
      .contains("Finalizar Pagamento")
      .should("be.visible")
      .and("be.disabled");

    cy.get('input[name="cardNumber"]').type("4111111111111111");
    cy.get('input[name="cardExpirationDate"]').type("1129");
    cy.get('input[name="cardCVV"]').type("456");
    cy.get('input[name="holderName"]').type("John Doe");
    cy.get('input[name="CPF"]').type("28315487051");
    cy.get("select").select("12");

    cy.get("button")
      .contains("Finalizar Pagamento")
      .should("not.be.disabled")
      .click();

    cy.wait("@failedPayment");

    cy.contains(
      "div",
      "Erro ao processar a assinatura. Tente novamente.",
    ).should("be.visible");
  });
});
