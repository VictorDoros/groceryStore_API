import ListProductsAPI from "../api/listProductsAPI"
import CreateCartAPI from "../api/createCartAPI"
import AddItemAPI from "../api/addItemCartAPI"
import UpdateCartAPI from "../api/updateCartAPI"
import GetCartAPI from "../api/getCartAPI"

describe("Update the cart", {tags: ["@updateCart"]}, () => {
  let listProductsAPI: ListProductsAPI
  let createCartAPI: CreateCartAPI
  let addItemAPI: AddItemAPI
  let updateCartAPI: UpdateCartAPI
  let getCartAPI: GetCartAPI

  before(() => {
    listProductsAPI = new ListProductsAPI()
    createCartAPI = new CreateCartAPI()
    addItemAPI = new AddItemAPI()
    updateCartAPI = new UpdateCartAPI()
    getCartAPI = new GetCartAPI()

    listProductsAPI.getListProducts()
    createCartAPI.createCart()
  })

  it("Add item first", () => {
    addItemAPI.addItem()
  })

  it("Should have status 204 after updating the quntity of the product", () => {
    updateCartAPI.updateQuantityProductAPI().then((response) => {
      expect(response.status).to.eq(204)
    })
  })

  it("The quantity should be different after updating it", () => {
    getCartAPI.getCartAPI().then((response) => {
      expect(response.body.items[0].quantity).not.to.eq(1)
    })
  })

  it("Should have 204 after replacing the product from the cart", () => {
    updateCartAPI.replaceProductAPI().then((response) => {
      expect(response.status).to.eq(204)
    })
  })

  it("Should have the replaced product from the cart", () => {
    getCartAPI.getCartAPI().then((response) => {
      expect(response.body.items[0].productId).to.eq(
        Cypress.env("meatSeaFoodID")
      )
    })
  })
})
