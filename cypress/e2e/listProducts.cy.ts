import ListProductsAPI from "../api/listProductsAPI"

describe("Get list of products", () => {
  let listProductsAPI: ListProductsAPI

  before(() => {
    listProductsAPI = new ListProductsAPI()
  })

  it("Should have status 200", () => {
    listProductsAPI.getListProducts().then((response) => {
      expect(response.status).eq(200)
    })
  })

  it("Response should be an object", () => {
    listProductsAPI.getListProducts().then((response) => {
      expect(response).to.be.an("object")
      expect(response.body.length).to.be.above(0)
    })
  })
})
