import { faker } from "@faker-js/faker"

export default class RegisterAPIClient {
  registerAPIClient() {
    return cy
      .api({
        url: "/api-clients",
        method: "POST",
        body: {
          clientName: `${faker.person.firstName()}`,
          clientEmail: `${faker.internet.email()}`,
        },
      })
      .then((response) => {
        Cypress.env("accessToken", response.body.accessToken)
      })
  }
}
