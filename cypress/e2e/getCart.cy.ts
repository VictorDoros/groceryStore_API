import CartActions from "../actions/cartActions"

describe("Get the cart and add items", { tags: ["@getCart"] }, () => {
  let cartActions: CartActions

  before(() => {
    cartActions = new CartActions()

    cartActions.sendCreateCartRequest()
  })

  it("Should have status 200 when getting the cart", () => {
    cartActions.getCart_checkStatusCode()
  })

  it("Cart should have no items (should be empty)", () => {
    cartActions.checkCartIsCreatedAndEmpty()
  })
})
