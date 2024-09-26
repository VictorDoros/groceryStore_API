export default class SingleProductAPI {
  getSingleProduct() {
    return cy
      .api({
        url: `/products/${Number(Cypress.env("productID"))}`,
        method: "GET",
      })
      .then((response) => {
        Cypress.env("productCurrentStock", response.body["current-stock"])
      })
  }
}
