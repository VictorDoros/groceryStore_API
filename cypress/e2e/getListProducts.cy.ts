import GetListProductsAPI from "../api/getListProductsAPI"

describe("Get list of products", { tags: ["@getListProducts"] }, () => {
  let getListProductsAPI: GetListProductsAPI

  before(() => {
    getListProductsAPI = new GetListProductsAPI()
  })

  it("Should have status 200", () => {
    getListProductsAPI.getListProducts().then((response) => {
      expect(response.status).eq(200)
    })
  })

  it("Response should be an object", () => {
    getListProductsAPI.getListProducts().then((response) => {
      expect(response).to.be.an("object")
      expect(response.body.length).to.be.above(0)
    })
  })
})
