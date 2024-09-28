import CartActions from "../actions/cartActions"
import Environment from "../support/environment"

describe("Create cart", { tags: ["@createCart"] }, () => {
  let cartActions: CartActions
  let environment: Environment

  before(() => {
    cartActions = new CartActions()
    environment = new Environment()
  })

  it("Should have status 201 after creating the cart", () => {
    cartActions.createCart_checkStatusCode(environment)
  })

  it("Should have a valid cartId", () => {
    cartActions.checkCreatedCart(environment)
  })
})
