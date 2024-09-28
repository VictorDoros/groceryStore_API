import Environment from "../support/environment"

export default class GETSingleProductAPI {
  getSingleProduct(env: Environment) {
    return cy
      .api({
        url: `${env.getEnvironment()}/products/${Number(
          Cypress.env("productID")
        )}`,
        method: "GET",
      })
      .then((response) => {
        Cypress.env("productCurrentStock", response.body["current-stock"])
      })
  }
}
