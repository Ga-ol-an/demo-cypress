// roda docker run --network="host" -it -v C:\Users\gabri\Desktop\repo_eng_software\demo-cypress\cypress:/e2e -w /e2e cypress/included:9.2.0
describe("Teste End-to-End", () => {
  it("Teste 1: Visita Página", () => {
    // abre o site
    cy.visit("http://localhost:5000/");
  });
  it("Teste 2: Verifica item na página", () => {
    // Verifica se existe o livro desejado
    cy.get("[data-id=3]").should("contain.text", "Design Patterns");
  });
  it("Teste 3: Calcula Frete", () => {
    // Calcula o frete
    cy.get("[data-id=3]").within(() => {
      cy.get("input").type("10000-000");
      cy.contains("Calcular Frete").click().then;
      cy.wait(2000);
    });
    cy.get(".swal-text").contains("O frete é: R$");

    // Fecha o pop-up com o preço do frete
    cy.get(".swal-button").click();
  });
  // Código desenvolvido para o exercício 3:
  it("Teste 4: Compra de um livro", () => {
    // Calcula o frete
    cy.get("[data-id=3]").within(() => {
      cy.contains("Comprar").click().then;
      cy.wait(2000);
    });
    cy.get(".swal-text").contains("Sua compra foi realizada com sucesso");
    // Fecha o pop-up com da compra
    cy.get(".swal-button").click();
  });   


});
