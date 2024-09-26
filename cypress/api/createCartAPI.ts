export default class CreateCartAPI {
  createCart() {
    return cy
      .api({
        url: "/carts",
        method: "POST",
      })
      .then((response) => {
        Cypress.env("cartID", response.body.cartId)
      })
  }
}
