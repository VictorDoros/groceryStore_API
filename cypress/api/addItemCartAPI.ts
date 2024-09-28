import Environment from "../support/environment"

export default class AddItemAPI {
  addItem(env: Environment) {
    return cy
      .api({
        url: `${env.getEnvironment()}/carts/${Cypress.env("cartID")}/items`,
        method: "POST",
        body: {
          productId: `${Cypress.env("productID")}`,
        },
      })
      .then((response) => {
        Cypress.env("itemID", response.body.itemId)
      })
  }
}
