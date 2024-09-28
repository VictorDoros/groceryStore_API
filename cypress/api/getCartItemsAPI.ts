import Environment from "../support/environment"

export default class GetCartItemsAPI {
  getCartItems(env: Environment) {
    return cy
      .api({
        url: `${env.getEnvironment()}/carts/${Cypress.env("cartID")}/items`,
        method: "GET",
      })
      .then((response) => {
        Cypress.env("initialNumberQuantity", response.body.quantity)

        Cypress.env(
          "indexOfItem",
          response.body.findIndex((item) => item.id === Cypress.env("itemID"))
        )
      })
  }
}
