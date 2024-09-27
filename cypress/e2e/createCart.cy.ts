import CreateCartAPI from "../api/createCartAPI"

describe("Create cart", {tags: ["@createCart"]}, () => {
  let createCartAPI: CreateCartAPI

  before(() => {
    createCartAPI = new CreateCartAPI()
  })

  it("Should have status 201", () => {
    createCartAPI.createCart().then((response) => {
      expect(response.status).to.eq(201)
    })
  })

  it("Should have a valid cartId", () => {
    createCartAPI.createCart().then((response) => {
      expect(response.body)
        .to.be.an("object")
        .and.haveOwnProperty("cartId")
        .and.to.be.a("string")
    })
  })
})
