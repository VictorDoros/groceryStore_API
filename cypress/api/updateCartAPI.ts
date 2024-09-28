import Environment from "../support/environment"

export default class UpdateCartAPI {
  updateQuantityProductAPI(env: Environment) {
    return cy.api({
      url: `${env.getEnvironment()}/carts/${Cypress.env(
        "cartID"
      )}/items/${Cypress.env("itemID")}`,
      method: "PATCH",
      body: {
        quantity: Math.floor(Math.random() * (9 - 2) + 2),
      },
    })
  }

  replaceProductAPI(env: Environment) {
    return cy.api({
      url: `${env.getEnvironment()}/carts/${Cypress.env("cartID")}/items/${Cypress.env("itemID")}`,
      method: "PUT",
      body: {
        productId: `${Cypress.env("meatSeaFoodID")}`,
        quantity: Math.floor(Math.random() * (9 - 2) + 2),
      },
    })
  }
}
