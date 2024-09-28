import CartActions from "../actions/cartActions"
import Environment from "../support/environment"

describe("Get the cart and add items", { tags: ["@getCart"] }, () => {
  let cartActions: CartActions
  let environment: Environment

  before(() => {
    cartActions = new CartActions()
    environment = new Environment()

    cartActions.sendCreateCartRequest(environment)
  })

  it("Should have status 200 when getting the cart", () => {
    cartActions.getCart_checkStatusCode(environment)
  })

  it("Cart should have no items (should be empty)", () => {
    cartActions.checkCartIsCreatedAndEmpty(environment)
  })
})
