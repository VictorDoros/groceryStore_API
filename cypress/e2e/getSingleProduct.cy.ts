import ProductActions from "../actions/productActions"

describe(
  "Get a single product from the list",
  { tags: ["@getSingleProduct"] },
  () => {
    let productActions: ProductActions

    before(() => {
      productActions = new ProductActions()

      productActions.sendGETListProductRequest()
    })

    it("Should have status 200 after getting a single product", () => {
      productActions.getSingleProduct_checkStatusCode()
    })

    it("Check the id of the product", () => {
      productActions.checkIDProduct()
    })

    it("Check the product name", () => {
      productActions.checkProductName()
    })

    it("Check that product is in stock and the quantity is above 10", () => {
      productActions.checkProductQuantityAndIsInStock()
    })
  }
)
