import RegisterAPIClient from "../api/registerAPIClient"
import ProductActions from "../actions/productActions"
import CartActions from "../actions/cartActions"
import OrderActions from "../actions/orderActions"

describe(
  "Create, update and delete the order",
  { tags: ["@manageOrders"] },
  () => {
    let registerAPIClient: RegisterAPIClient
    let productActions: ProductActions
    let cartActions: CartActions
    let orderActions: OrderActions

    before(() => {
      registerAPIClient = new RegisterAPIClient()
      productActions = new ProductActions()
      cartActions = new CartActions()
      orderActions = new OrderActions()

      registerAPIClient.registerAPIClient()
      productActions.sendGETListProductRequest()
      cartActions.sendCreateCartRequest()
    })

    it("Should have status 201 after creating a new order", () => {
      cartActions.sendAddItemRequest()

      orderActions.createOrder_checkStatusCode()
    })

    it("Should have an item inside the order", () => {
      orderActions.checkOrderHasAnItem()
    })

    it("Should get a single order and check that the comment is empty", () => {
      orderActions.getSingleOrderWithEmptyComment()
    })

    it("Should have status 204 after updating the order", () => {
      orderActions.updateOrder_checkStatusCode()
    })

    it("Should have the updated comment", () => {
      orderActions.checkUpdatedComment()
    })

    it("Should have status 204 after deleteing the order", () => {
      orderActions.deleteOrder_checkStatusCode()
    })

    it("Should have the status code 404 when trying to find the removed order", () => {
      orderActions.getRemovedOrder_checkStatusCode()
    })

    it("Should receive the corresponding error that the orderID was not found", () => {
      orderActions.checkErrorDeletedOrder()
    })
  }
)
