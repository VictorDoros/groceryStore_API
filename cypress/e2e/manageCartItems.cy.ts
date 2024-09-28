import ProductActions from "../actions/productActions"
import CartActions from "../actions/cartActions"
import Environment from "../support/environment"

describe(
  "Add and update items from the cart",
  { tags: ["@manageCartItems"] },
  () => {
    let productActions: ProductActions
    let cartActions: CartActions
    let environment: Environment

    before(() => {
      productActions = new ProductActions()
      cartActions = new CartActions()
      environment = new Environment()

      productActions.sendGETListProductRequest(environment)
      cartActions.sendCreateCartRequest(environment)
    })

    it("Should have status 201 after adding the item to the cart", () => {
      cartActions.addItem_checkStatusCode(environment)
    })

    it("The cart should have an item", () => {
      cartActions.checkQuantityItemIsOne(environment)
    })

    it("Check the desired item was added", () => {
      cartActions.checkProductAddedToItem(environment)
    })

    it("Should have status 204 after updating the quntity of the product", () => {
      cartActions.updateQuantityProduct_checkStatusCode(environment)
    })

    it("The quantity should be different after updating it", () => {
      cartActions.checkQuantityProductIsChanged(environment)
    })

    it("Should have 204 after replacing the product from the cart", () => {
      cartActions.replaceProduct_checkStatusCode(environment)
    })

    it("Should have the replaced product from the cart", () => {
      cartActions.checkProductWasReplaced(environment)
    })
  }
)
