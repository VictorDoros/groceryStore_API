import Environment from "../support/environment"

export default class DeleteOrderAPI {
  deleteOrderOrder(env: Environment) {
    return cy.api({
      url: `${env.getEnvironment()}/orders/${Cypress.env("orderID")}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Cypress.env("accessToken")}`,
      },
    })
  }
}
