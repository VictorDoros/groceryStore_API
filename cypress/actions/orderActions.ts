import CreateOrderAPI from "../api/createOrderAPI"
import GetOrdersAPI from "../api/getOrdersAPI"
import GetSingleOrderAPI from "../api/getSingleOrderAPI"
import UpdateOrderAPI from "../api/updateOrderAPI"
import DeleteOrderAPI from "../api/deleteOrderAPI"
import Environment from "../support/environment"

export default class OrderActions {
  createOrder_checkStatusCode(env: Environment) {
    cy.step("Create the order")
    new CreateOrderAPI().createOrderAPI(env).then((response) => {
      expect(response.status).to.eq(201)
    })
  }

  checkOrderHasAnItem(env: Environment) {
    new GetOrdersAPI().getOrders(env).then((response) => {
      expect(response.body.length).to.eq(1)
    })
  }

  getSingleOrderWithEmptyComment(env: Environment) {
    new GetSingleOrderAPI().getSingleOrder(env).then((response) => {
      expect(response.body.comment).is.empty
    })
  }

  updateOrder_checkStatusCode(env: Environment) {
    new UpdateOrderAPI().updateOrder(env).then((response) => {
      expect(response.status).to.eq(204)
    })
  }

  checkUpdatedComment(env: Environment) {
    new GetSingleOrderAPI().getSingleOrder(env).then((response) => {
      expect(response.body.comment).is.not.empty
      expect(response.body.comment).to.eq("I wanna pick my order up at 6am.")
    })
  }

  deleteOrder_checkStatusCode(env: Environment) {
    new DeleteOrderAPI().deleteOrderOrder(env).then((response) => {
      expect(response.status).to.eq(204)
    })
  }

  getRemovedOrder_checkStatusCode(env: Environment) {
    new GetSingleOrderAPI().getSingleOrder(env).then((response) => {
      expect(response.status).to.eq(404)
    })
  }

  checkErrorDeletedOrder(env: Environment) {
    new GetSingleOrderAPI().getSingleOrder(env).then((response) => {
      expect(response.body.error).to.eq(
        `No order with id ${Cypress.env("orderID")}.`
      )
    })
  }
}
