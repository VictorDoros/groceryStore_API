import CartActions from "../actions/cartActions"

describe("Create cart", { tags: ["@createCart"] }, () => {
  let cartActions: CartActions

  before(() => {
    cartActions = new CartActions()
  })

  it("Should have status 201 after creating the cart", () => {
    cartActions.createCart_checkStatusCode()
  })

  it("Should have a valid cartId", () => {
    cartActions.checkCreatedCart()
  })
})
