export default class GetCartAPI {
  getCartAPI() {
    return cy.api({
      url: `/carts/${Cypress.env("cartID")}`,
      method: "GET",
    })
  }
}
