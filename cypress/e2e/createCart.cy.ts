import CreateCartAPI from "../api/createCartAPI"
import CreateCartVariables from "../variables/createCartVariables"

describe("Create cart", () => {
  let createCartAPI: CreateCartAPI
  let createCartVariables: CreateCartVariables

  before(() => {
    createCartAPI = new CreateCartAPI()
    createCartVariables = new CreateCartVariables()
  })

  it("Should have status 201", () => {
    createCartAPI.createCart(createCartVariables).then((response) => {
      expect(response.status).to.eq(201)
    })
  })

  it("Should have a valid cartId", () => {
    createCartAPI.createCart(createCartVariables).then((response) => {
      expect(response.body)
        .to.be.an("object")
        .and.haveOwnProperty("cartId")
        .and.to.be.a("string")
    })
  })
})
