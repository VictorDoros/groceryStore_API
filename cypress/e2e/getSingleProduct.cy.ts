import ProductActions from "../actions/productActions"
import Environment from "../support/environment"

describe(
  "Get a single product from the list",
  { tags: ["@getSingleProduct"] },
  () => {
    let productActions: ProductActions
    let environment: Environment

    before(() => {
      productActions = new ProductActions()
      environment = new Environment()

      productActions.sendGETListProductRequest(environment)
    })

    it("Should have status 200 after getting a single product", () => {
      productActions.getSingleProduct_checkStatusCode(environment)
    })

    it("Check the id of the product", () => {
      productActions.checkIDProduct(environment)
    })

    it("Check the product name", () => {
      productActions.checkProductName(environment)
    })

    it("Check that product is in stock and the quantity is above 10", () => {
      productActions.checkProductQuantityAndIsInStock(environment)
    })
  }
)
