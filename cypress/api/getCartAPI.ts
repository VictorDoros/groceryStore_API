import Environment from "../support/environment"

export default class GetCartAPI {
  getCartAPI(env: Environment) {
    return cy.api({
      url: `${env.getEnvironment()}/carts/${Cypress.env("cartID")}`,
      method: "GET",
    })
  }
}
