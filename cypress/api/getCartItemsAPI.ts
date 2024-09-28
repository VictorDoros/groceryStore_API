export default class GetCartItemsAPI {
  getCartItems() {
    return cy
      .api({
        url: `/carts/${Cypress.env("cartID")}/items`,
        method: "GET",
      })
      .then((response) => {
        Cypress.env("initialNumberQuantity", response.body.quantity)

        Cypress.env(
          "indexOfItem",
          response.body.findIndex((item) => item.id === Cypress.env("itemID"))
        )
      })
  }
}
