export default class UpdateCartAPI {
  updateQuantityProductAPI() {
    return cy.api({
      url: `/carts/${Cypress.env("cartID")}/items/${Cypress.env("itemID")}`,
      method: "PATCH",
      body: {
        quantity: Math.floor(Math.random() * (9 - 2) + 2),
      },
    })
  }

  replaceProductAPI() {
    return cy.api({
      url: `/carts/${Cypress.env("cartID")}/items/${Cypress.env("itemID")}`,
      method: "PUT",
      body: {
        productId: `${Cypress.env("meatSeaFoodID")}`,
        quantity: Math.floor(Math.random() * (9 - 2) + 2),
      },
    })
  }
}
