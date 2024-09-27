export default class DeleteOrderAPI {
  deleteOrderOrder() {
    return cy.api({
      url: `/orders/${Cypress.env("orderID")}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Cypress.env("accessToken")}`,
      },
    })
  }
}
