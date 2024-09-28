import CreateCartAPI from "../api/createCartAPI"
import AddItemAPI from "../api/addItemCartAPI"
import UpdateCartAPI from "../api/updateCartAPI"
import GetCartAPI from "../api/getCartAPI"
import GetCartItemsAPI from "../api/getCartItemsAPI"
import Environment from "../support/environment"

export default class CartActions {
  sendGetCartRequest(env: Environment) {
    new GetCartAPI().getCartAPI(env)
  }

  sendCreateCartRequest(env: Environment) {
    cy.step("Create a new cart")
    new CreateCartAPI().createCart(env)
  }

  sendAddItemRequest(env: Environment) {
    new AddItemAPI().addItem(env)
  }

  createCart_checkStatusCode(env: Environment) {
    new CreateCartAPI().createCart(env).then((response) => {
      expect(response.status).to.eq(201)
    })
  }

  getCart_checkStatusCode(env: Environment) {
    new GetCartAPI().getCartAPI(env).then((response) => {
      expect(response.status).to.eq(200)
    })
  }

  addItem_checkStatusCode(env: Environment) {
    new AddItemAPI().addItem(env).then((response) => {
      expect(response.status).to.eq(201)
    })
  }

  checkCartIsCreatedAndEmpty(env: Environment) {
    new GetCartAPI().getCartAPI(env).then((response) => {
      expect(response.body).to.haveOwnProperty("created")
      expect(response.body.items).to.be.an("array").and.empty
    })
  }

  checkCreatedCart(env: Environment) {
    new CreateCartAPI().createCart(env).then((response) => {
      expect(response.body)
        .to.be.an("object")
        .and.haveOwnProperty("cartId")
        .and.to.be.a("string")
    })
  }

  checkQuantityItemIsOne(env: Environment) {
    new GetCartAPI().getCartAPI(env).then((response) => {
      expect(response.body.items.length).to.eq(1)
    })
  }

  checkProductAddedToItem(env: Environment) {
    new GetCartItemsAPI().getCartItems(env).then((response) => {
      expect(response.body[Cypress.env("indexOfItem")].quantity).to.eq(1)
      expect(response.body[Cypress.env("indexOfItem")].productId).to.eq(
        Cypress.env("productID")
      )
      expect(response.body[Cypress.env("indexOfItem")].id).to.eq(
        Cypress.env("itemID")
      )
    })
  }

  updateQuantityProduct_checkStatusCode(env: Environment) {
    new UpdateCartAPI().updateQuantityProductAPI(env).then((response) => {
      expect(response.status).to.eq(204)
    })
  }

  checkQuantityProductIsChanged(env: Environment) {
    new GetCartItemsAPI().getCartItems(env).then((response) => {
      expect(response.body[Cypress.env("indexOfItem")].quantity).not.to.eq(1)
    })
  }

  replaceProduct_checkStatusCode(env: Environment) {
    new UpdateCartAPI().replaceProductAPI(env).then((response) => {
      expect(response.status).to.eq(204)
    })
  }

  checkProductWasReplaced(env: Environment) {
    new GetCartItemsAPI().getCartItems(env).then((response) => {
      expect(response.body[Cypress.env("indexOfItem")].productId).to.eq(
        Cypress.env("meatSeaFoodID")
      )
    })
  }
}
