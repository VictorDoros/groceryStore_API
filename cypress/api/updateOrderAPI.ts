import Environment from "../support/environment"

export default class UpdateOrderAPI {
  updateOrder(env: Environment) {
    return cy.api({
      url: `${env.getEnvironment()}/orders/${Cypress.env("orderID")}`,
      method: "PATCH",
      body: {
        comment: "I wanna pick my order up at 6am.",
      },
      headers: {
        Authorization: `Bearer ${Cypress.env("accessToken")}`,
      },
    })
  }
}
