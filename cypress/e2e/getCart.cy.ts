import GetCartAPI from "../api/getCartAPI"
import CreateCartAPI from "../api/createCartAPI"
import CreateCartVariables from "../variables/createCartVariables"

describe("Get the cart and add items", () => {
  let getCartAPI: GetCartAPI
  let createCartAPI: CreateCartAPI
  let createCartVariables: CreateCartVariables

  before(() => {
    getCartAPI = new GetCartAPI()
    createCartAPI = new CreateCartAPI()
    createCartVariables = new CreateCartVariables()

    createCartAPI.createCart(createCartVariables)
  })

  it("Should have status 200 when getting the cart", () => {
    getCartAPI.getCartAPI(createCartVariables).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it("Cart should an empty array", () => {
    getCartAPI.getCartAPI(createCartVariables).then((response) => {
      expect(response.body.items).to.be.an("array").and.empty
    })
  })
})
