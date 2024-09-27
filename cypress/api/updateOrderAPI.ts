export default class UpdateOrderAPI {
  updateOrder() {
    return cy.api({
      url: `/orders/${Cypress.env("orderID")}`,
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
