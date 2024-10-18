import GETListProductsAPI from "../api/getListProductsAPI"
import GETSingleProductAPI from "../api/getSingleProductAPI"
import Environment from "../support/environment"

export default class ProductActions {
  sendGETListProductRequest(env: Environment) {
    new GETListProductsAPI().getListProducts(env)
  }

  sendGETSingleProductRequest(env: Environment) {
    new GETSingleProductAPI().getSingleProduct(env)
  }

  getListProducts_checkStatusCode(env: Environment) {
    new GETListProductsAPI().getListProducts(env).then((response) => {
      expect(response.status).eq(200)
    })
  }

  checkResponseOfGetListProducts(env: Environment) {
    new GETListProductsAPI().getListProducts(env).then((response) => {
      expect(response).to.be.an("object")
      expect(response.body.length).to.be.above(0) 
    })
  }

  getSingleProduct_checkStatusCode(env: Environment) {
    new GETSingleProductAPI().getSingleProduct(env).then((response) => {
      expect(response.status).to.eq(200)
    })
  }

  checkIDProduct(env: Environment) {
    new GETSingleProductAPI().getSingleProduct(env).then((response) => {
      expect(response.body)
        .to.be.an("object")
        .and.haveOwnProperty("id")
        .and.be.eq(Cypress.env("productID"))
    })
  }

  checkProductName(env: Environment) {
    new GETSingleProductAPI().getSingleProduct(env).then((response) => {
      expect(response.body.name).to.eq("Green Cabbage Organic")
    })
  }

  checkProductQuantityAndIsInStock(env: Environment) {
    new GETSingleProductAPI().getSingleProduct(env).then((response) => {
      expect(response.body.inStock).to.be.true
      expect(response.body["current-stock"]).to.be.above(10)
    })
  }
}
