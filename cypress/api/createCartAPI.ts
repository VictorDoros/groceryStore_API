import Environment from "../support/environment"

export default class CreateCartAPI {
  createCart(env: Environment) {
    return cy
      .api({
        url: `${env.getEnvironment()}/carts`,
        method: "POST",
      })
      .then((response) => {
        Cypress.env("cartID", response.body.cartId)
      })
  }
}
