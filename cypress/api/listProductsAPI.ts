import ListProductVariables from "../variables/listProductVariables"
import "cypress-map"

export default class ListProductsAPI {
  getListProducts(variables: ListProductVariables) {
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
          variables.setFreshProduct(freshProduct.id)
          console.log(freshProduct)
        }

        const meatSeaFood = response.body.find(
          (product) =>
            product.name === "Angus Steak Burgers" && product.inStock === true
        )
        if (meatSeaFood) {
          variables.setMeatSeaFood(meatSeaFood.id)
        }

        const beverage = response.body
          .filter((drink) => {
            drink.category === "Coffee"
          })
          .map((coffee) => coffee.id)
        if (beverage) {
          variables.setBeverage(beverage[2])
        }
      })
  }
}
