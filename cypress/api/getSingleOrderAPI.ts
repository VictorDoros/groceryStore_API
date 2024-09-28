export default class GetSingleOrderAPI {
  getSingleOrder() {
    return cy.api({
      url: `/orders/${Cypress.env("orderID")}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cypress.env("accessToken")}`,
      },
      failOnStatusCode: false,
    })
  }
}
