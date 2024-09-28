import RegisterAPIClient from "../api/registerAPIClient"
import ProductActions from "../actions/productActions"
import CartActions from "../actions/cartActions"
import OrderActions from "../actions/orderActions"
import Environment from "../support/environment"

describe(
  "Create, update and delete the order",
  { tags: ["@manageOrders"] },
  () => {
    let registerAPIClient: RegisterAPIClient
    let productActions: ProductActions
    let cartActions: CartActions
    let orderActions: OrderActions
    let environment: Environment

    before(() => {
      registerAPIClient = new RegisterAPIClient()
      productActions = new ProductActions()
      cartActions = new CartActions()
      orderActions = new OrderActions()
      environment = new Environment()

      registerAPIClient.registerAPIClient(environment)
      productActions.sendGETListProductRequest(environment)
      cartActions.sendCreateCartRequest(environment)
    })

    it("Should have status 201 after creating a new order", () => {
      cartActions.sendAddItemRequest(environment)

      orderActions.createOrder_checkStatusCode(environment)
    })

    it("Should have an item inside the order", () => {
      orderActions.checkOrderHasAnItem(environment)
    })

    it("Should get a single order and check that the comment is empty", () => {
      orderActions.getSingleOrderWithEmptyComment(environment)
    })

    it("Should have status 204 after updating the order", () => {
      orderActions.updateOrder_checkStatusCode(environment)
    })

    it("Should have the updated comment", () => {
      orderActions.checkUpdatedComment(environment)
    })

    it("Should have status 204 after deleteing the order", () => {
      orderActions.deleteOrder_checkStatusCode(environment)
    })

    it("Should have the status code 404 when trying to find the removed order", () => {
      orderActions.getRemovedOrder_checkStatusCode(environment)
    })

    it("Should receive the corresponding error that the orderID was not found", () => {
      orderActions.checkErrorDeletedOrder(environment)
    })
  }
)
