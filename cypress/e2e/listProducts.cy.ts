import ListProductsAPI from "../api/listProductsAPI"
import ListProductVariables from "../variables/listProductVariables"

describe("Get list of products", () => {
  let listProductsAPI: ListProductsAPI
  let listProductVariables: ListProductVariables

  before(() => {
    listProductsAPI = new ListProductsAPI()
    listProductVariables = new ListProductVariables()
  })

  it("Should have status 200", () => {
    listProductsAPI.getListProducts(listProductVariables).then((response) => {
      expect(response.status).eq(200)
    })
  })

  it("Response should be an object", () => {
    listProductsAPI.getListProducts(listProductVariables).then((response) => {
      expect(response).to.be.an("object")
      expect(response.body.length).to.be.above(0)
    })
  })
})
