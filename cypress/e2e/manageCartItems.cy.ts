import ListProductsAPI from "../api/listProductsAPI"
import CreateCartAPI from "../api/createCartAPI"
import AddItemAPI from "../api/addItemCartAPI"
import UpdateCartAPI from "../api/updateCartAPI"
import GetCartAPI from "../api/getCartAPI"

describe(
  "Add and update items from the cart",
  { tags: ["@manageCartItems"] },
  () => {
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

    it("Should have status 201 after adding the item to the cart", () => {
      addItemAPI.addItem().then((response) => {
        expect(response.status).to.eq(201)
      })
    })

    it("The cart should have an item", () => {
      getCartAPI.getCartAPI().then((response) => {
        expect(response.body.items.length).to.eq(1)
      })
    })

    it("Check the desired item was added", () => {
      getCartAPI.getCartAPI().then((response) => {
        expect(response.body.items[0].quantity).to.eq(1)
        expect(response.body.items[0].productId).to.eq(Cypress.env("productID"))
        expect(response.body.items[0].id).to.eq(Cypress.env("itemID"))
      })
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
  }
)
