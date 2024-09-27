import GetCartAPI from "../api/getCartAPI"
import CreateCartAPI from "../api/createCartAPI"

describe("Get the cart and add items", { tags: ["@getCart"] }, () => {
  let getCartAPI: GetCartAPI
  let createCartAPI: CreateCartAPI

  before(() => {
    getCartAPI = new GetCartAPI()
    createCartAPI = new CreateCartAPI()

    createCartAPI.createCart()
  })

  it("Should have status 200 when getting the cart", () => {
    getCartAPI.getCartAPI().then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it("Cart should an empty array", () => {
    getCartAPI.getCartAPI().then((response) => {
      expect(response.body.items).to.be.an("array").and.empty
    })
  })
})
