import CreateCartAPI from "../api/createCartAPI"
import AddItemAPI from "../api/addItemCartAPI"
import UpdateCartAPI from "../api/updateCartAPI"
import GetCartAPI from "../api/getCartAPI"
import GetCartItemsAPI from "../api/getCartItemsAPI"

export default class CartActions {
  sendGetCartRequest() {
    new GetCartAPI().getCartAPI()
  }

  sendCreateCartRequest() {
    cy.step("Create a new cart")
    new CreateCartAPI().createCart()
  }

  sendAddItemRequest() {
    new AddItemAPI().addItem()
  }

  createCart_checkStatusCode() {
    new CreateCartAPI().createCart().then((response) => {
      expect(response.status).to.eq(201)
    })
  }

  getCart_checkStatusCode() {
    new GetCartAPI().getCartAPI().then((response) => {
      expect(response.status).to.eq(200)
    })
  }

  addItem_checkStatusCode() {
    new AddItemAPI().addItem().then((response) => {
      expect(response.status).to.eq(201)
    })
  }

  checkCartIsCreatedAndEmpty() {
    new GetCartAPI().getCartAPI().then((response) => {
      expect(response.body).to.haveOwnProperty("created")
      expect(response.body.items).to.be.an("array").and.empty
    })
  }

  checkCreatedCart() {
    new CreateCartAPI().createCart().then((response) => {
      expect(response.body)
        .to.be.an("object")
        .and.haveOwnProperty("cartId")
        .and.to.be.a("string")
    })
  }

  checkQuantityItemIsOne() {
    new GetCartAPI().getCartAPI().then((response) => {
      expect(response.body.items.length).to.eq(1)
    })
  }

  checkProductAddedToItem() {
    new GetCartItemsAPI().getCartItems().then((response) => {
      expect(response.body[Cypress.env("indexOfItem")].quantity).to.eq(1)
      expect(response.body[Cypress.env("indexOfItem")].productId).to.eq(
        Cypress.env("productID")
      )
      expect(response.body[Cypress.env("indexOfItem")].id).to.eq(
        Cypress.env("itemID")
      )
    })
  }

  updateQuantityProduct_checkStatusCode() {
    new UpdateCartAPI().updateQuantityProductAPI().then((response) => {
      expect(response.status).to.eq(204)
    })
  }

  checkQuantityProductIsChanged() {
    new GetCartItemsAPI().getCartItems().then((response) => {
      expect(response.body[Cypress.env("indexOfItem")].quantity).not.to.eq(1)
    })
  }

  replaceProduct_checkStatusCode() {
    new UpdateCartAPI().replaceProductAPI().then((response) => {
      expect(response.status).to.eq(204)
    })
  }

  checkProductWasReplaced() {
    new GetCartItemsAPI().getCartItems().then((response) => {
      expect(response.body[Cypress.env("indexOfItem")].productId).to.eq(
        Cypress.env("meatSeaFoodID")
      )
    })
  }
}
