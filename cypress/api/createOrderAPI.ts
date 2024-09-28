import Environment from "../support/environment"
import { faker } from "@faker-js/faker"

export default class CreateOrder {
  createOrderAPI(env: Environment) {
    return cy
      .api({
        url: `${env.getEnvironment()}/orders`,
        method: "POST",
        body: {
          cartId: Cypress.env("cartID"),
          customerName: `${faker.person.firstName()} ${faker.person.lastName()}`,
        },
        headers: {
          Authorization: `Bearer ${Cypress.env("accessToken")}`,
        },
      })
      .then((response) => {
        Cypress.env("orderID", response.body.orderId)
      })
  }
}
