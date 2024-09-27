import ListProductAPI from "../api/listProductsAPI"
import SingleProductAPI from "../api/singleProductAPI"

describe(
  "Get a single product from the list",
  { tags: ["@getSingleProduct"] },
  () => {
    let listProductAPI: ListProductAPI
    let singleProductAPI: SingleProductAPI

    before(() => {
      listProductAPI = new ListProductAPI()
      singleProductAPI = new SingleProductAPI()

      listProductAPI.getListProducts()
    })

    it("Should have status 200", () => {
      singleProductAPI.getSingleProduct().then((response) => {
        expect(response.status).to.eq(200)
      })
    })

    it("Check the id of the product", () => {
      singleProductAPI.getSingleProduct().then((response) => {
        expect(response.body)
          .to.be.an("object")
          .and.haveOwnProperty("id")
          .and.be.eq(Cypress.env("productID"))
      })
    })

    it("Check the product name", () => {
      singleProductAPI.getSingleProduct().then((response) => {
        expect(response.body.name).to.eq("Green Cabbage Organic")
      })
    })

    it("Check that product is in stock and the quantity is above 10", () => {
      singleProductAPI.getSingleProduct().then((response) => {
        expect(response.body.inStock).to.be.true
        expect(response.body["current-stock"]).to.be.above(10)
      })
    })
  }
)
