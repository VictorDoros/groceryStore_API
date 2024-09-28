import ProductActions from "../actions/productActions"

describe("Get list of products", { tags: ["@getListProducts"] }, () => {
  let productActions: ProductActions

  before(() => {
    productActions = new ProductActions()
  })

  it("Should have status 200 after ettinh the list of the products", () => {
    productActions.getListProducts_checkStatusCode()
  })

  it("Response should be an object", () => {
    productActions.checkResponseOfGetListProducts()
  })
})
