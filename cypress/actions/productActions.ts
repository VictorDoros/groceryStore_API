import GETListProductsAPI from "../api/getListProductsAPI"
import GETSingleProductAPI from "../api/getSingleProductAPI"

export default class ProductActions {
  sendGETListProductRequest() {
    new GETListProductsAPI().getListProducts()
  }

  sendGETSingleProductRequest() {
    new GETSingleProductAPI().getSingleProduct()
  }

  getListProducts_checkStatusCode() {
    new GETListProductsAPI().getListProducts().then((response) => {
      expect(response.status).eq(200)
    })
  }

  checkResponseOfGetListProducts() {
    new GETListProductsAPI().getListProducts().then((response) => {
      expect(response).to.be.an("object")
      expect(response.body.length).to.be.above(0)
    })
  }

  getSingleProduct_checkStatusCode() {
    new GETSingleProductAPI().getSingleProduct().then((response) => {
      expect(response.status).to.eq(200)
    })
  }

  checkIDProduct() {
    new GETSingleProductAPI().getSingleProduct().then((response) => {
      expect(response.body)
        .to.be.an("object")
        .and.haveOwnProperty("id")
        .and.be.eq(Cypress.env("productID"))
    })
  }

  checkProductName() {
    new GETSingleProductAPI().getSingleProduct().then((response) => {
      expect(response.body.name).to.eq("Green Cabbage Organic")
    })
  }

  checkProductQuantityAndIsInStock() {
    new GETSingleProductAPI().getSingleProduct().then((response) => {
      expect(response.body.inStock).to.be.true
      expect(response.body["current-stock"]).to.be.above(10)
    })
  }
}
