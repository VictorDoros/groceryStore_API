import ProductActions from "../actions/productActions"
import Environment from "../support/environment"

describe("Get list of products", { tags: ["@getListProducts"] }, () => {
  let productActions: ProductActions
  let environment: Environment

  before(() => {
    productActions = new ProductActions()
    environment = new Environment()
  })

  it("Should have status 200 after ettinh the list of the products", () => {
    productActions.getListProducts_checkStatusCode(environment)
  })

  it("Response should be an object", () => {
    productActions.checkResponseOfGetListProducts(environment)
  })
})
