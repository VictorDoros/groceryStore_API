export default class VariablesSingleProduct {
  private productCurrentStock: number

  getProductCurrentStock() {
    return this.productCurrentStock
  }

  setProductCurrentStock(productCurrentStock: number) {
    this.productCurrentStock = productCurrentStock
  }
}
