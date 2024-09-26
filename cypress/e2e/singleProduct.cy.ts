import ListProductAPI from "../api/listProductsAPI"
import SingleProductAPI from "../api/singleProductAPI"
import ListProductVariables from "../variables/listProductVariables"
import SingleProductVariables from "../variables/singleProductVariables"

describe("Get a single product from the list", () => {
  let listProductAPI: ListProductAPI
  let singleProductAPI: SingleProductAPI
  let listProductVariables: ListProductVariables
  let singleProductVariables: SingleProductVariables

  before(() => {
    listProductAPI = new ListProductAPI()
    singleProductAPI = new SingleProductAPI()
    listProductVariables = new ListProductVariables()
    singleProductVariables = new SingleProductVariables()

    listProductAPI.getListProducts(listProductVariables)
  })

  it("Should have status 200", () => {
    singleProductAPI.getSingleProduct(listProductVariables, singleProductVariables)
  })

  it("Check the id of the product", () => {
    singleProductAPI
      .getSingleProduct(listProductVariables, singleProductVariables)
      .then((response) => {
        expect(response.body)
          .to.be.an("object")
          .and.haveOwnProperty("id")
          .and.be.eq(listProductVariables.getFreshProduct())
      })
  })

  it("Check the product name", () => {
    singleProductAPI
      .getSingleProduct(listProductVariables, singleProductVariables)
      .then((response) => {
        expect(response.body.name).to.eq("Green Cabbage Organic")
      })
  })

  it("Check that product is in stock and the quantity is above 10", () => {
    singleProductAPI
      .getSingleProduct(listProductVariables, singleProductVariables)
      .then((response) => {
        expect(response.body.inStock).to.be.true
        expect(response.body["current-stock"]).to.be.above(10)
      })
  })
})
