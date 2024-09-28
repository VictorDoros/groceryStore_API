import GetListProductAPI from "../api/getListProductsAPI"
import GetSingleProductAPI from "../api/getSingleProductAPI"

describe(
  "Get a single product from the list",
  { tags: ["@getSingleProduct"] },
  () => {
    let getListProductsAPI: GetListProductAPI
    let getSingleProductAPI: GetSingleProductAPI

    before(() => {
      getListProductsAPI = new GetListProductAPI()
      getSingleProductAPI = new GetSingleProductAPI()

      getListProductsAPI.getListProducts()
    })

    it("Should have status 200", () => {
      getSingleProductAPI.getSingleProduct().then((response) => {
        expect(response.status).to.eq(200)
      })
    })

    it("Check the id of the product", () => {
      getSingleProductAPI.getSingleProduct().then((response) => {
        expect(response.body)
          .to.be.an("object")
          .and.haveOwnProperty("id")
          .and.be.eq(Cypress.env("productID"))
      })
    })

    it("Check the product name", () => {
      getSingleProductAPI.getSingleProduct().then((response) => {
        expect(response.body.name).to.eq("Green Cabbage Organic")
      })
    })

    it("Check that product is in stock and the quantity is above 10", () => {
      getSingleProductAPI.getSingleProduct().then((response) => {
        expect(response.body.inStock).to.be.true
        expect(response.body["current-stock"]).to.be.above(10)
      })
    })
  }
)
