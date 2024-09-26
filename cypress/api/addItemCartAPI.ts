export default class AddItemAPI {
  addItem() {
    return cy
      .api({
        url: `/carts/${Cypress.env("cartID")}/items`,
        method: "POST",
        body: {
          productId: `${Cypress.env("productID")}`,
        },
      })
      .then((response) => {
        Cypress.env("itemID", response.body.itemId)
      })
  }
}
