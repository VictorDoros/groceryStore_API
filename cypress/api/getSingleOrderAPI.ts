import Environment from "../support/environment"

export default class GetSingleOrderAPI {
  getSingleOrder(env: Environment) {
    return cy.api({
      url: `${env.getEnvironment()}/orders/${Cypress.env("orderID")}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cypress.env("accessToken")}`,
      },
      failOnStatusCode: false,
    })
  }
}
