export default class GetOrdersAPI {
  getOrders() {
    return cy.api({
      url: "/orders",
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cypress.env("accessToken")}`,
      },
    })
  }
}
