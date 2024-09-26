import "cypress-map"

export default class ListProductsAPI {
  getListProducts() {
    return cy
      .api({
        url: "/products",
        method: "GET",
      })
      .then((response) => {
        const freshProduct = response.body.find(
          (product) =>
            product.name === "Green Cabbage Organic" && product.inStock === true
        )
        if (freshProduct) {
          Cypress.env("productID", freshProduct.id)
        }

        const meatSeaFood = response.body.find(
          (product) =>
            product.name === "Angus Steak Burgers" && product.inStock === true
        )
        if (meatSeaFood) {
          Cypress.env("meatSeaFoodID", meatSeaFood.id)
        }

        const beverage = response.body
          .filter((drink) => {
            drink.category === "Coffee"
          })
          .map((coffee) => coffee.id)
        if (beverage) {
          Cypress.env("coffeID", beverage[2])
        }
      })
  }
}
