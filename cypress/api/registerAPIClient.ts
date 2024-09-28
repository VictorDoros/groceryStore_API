import Environment from "../support/environment"
import { faker } from "@faker-js/faker"

export default class RegisterAPIClient {
  registerAPIClient(env: Environment) {
    return cy
      .api({
        url: `${env.getEnvironment()}/api-clients`,
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
