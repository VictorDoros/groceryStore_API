export default class ListProductVariables {
  private freshProduct: string
  private meatSeaFood: string
  private beverage: string

  getFreshProduct() {
    return this.freshProduct
  }

  setFreshProduct(freshProduct: string) {
    this.freshProduct = freshProduct
  }

  getMeatSeaFood() {
    return this.meatSeaFood
  }

  setMeatSeaFood(meatSeeFood: string) {
    this.meatSeaFood = meatSeeFood
  }

  getBeverage() {
    return this.beverage
  }

  setBeverage(beverage: string) {
    this.beverage = beverage
  }
}
