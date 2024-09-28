import Environment from "../support/environment"

export default class GetOrdersAPI {
  getOrders(env: Environment) {
    return cy.api({
      url: `${env.getEnvironment()}/orders`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cypress.env("accessToken")}`,
      },
    })
  }
}
