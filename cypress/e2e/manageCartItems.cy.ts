import ProductActions from "../actions/productActions"
import CartActions from "../actions/cartActions"

describe(
  "Add and update items from the cart",
  { tags: ["@manageCartItems"] },
  () => {
    let productActions: ProductActions
    let cartActions: CartActions

    before(() => {
      productActions = new ProductActions()
      cartActions = new CartActions()

      productActions.sendGETListProductRequest()
      cartActions.sendCreateCartRequest()
    })

    it("Should have status 201 after adding the item to the cart", () => {
      cartActions.addItem_checkStatusCode()
    })

    it("The cart should have an item", () => {
      cartActions.checkQuantityItemIsOne()
    })

    it("Check the desired item was added", () => {
      cartActions.checkProductAddedToItem()
    })

    it("Should have status 204 after updating the quntity of the product", () => {
      cartActions.updateQuantityProduct_checkStatusCode()
    })

    it("The quantity should be different after updating it", () => {
      cartActions.checkQuantityProductIsChanged()
    })

    it("Should have 204 after replacing the product from the cart", () => {
      cartActions.replaceProduct_checkStatusCode()
    })

    it("Should have the replaced product from the cart", () => {
      cartActions.checkProductWasReplaced()
    })
  }
)
