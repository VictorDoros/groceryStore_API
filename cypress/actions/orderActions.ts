import AddItemAPI from "../api/addItemCartAPI"
import CreateOrderAPI from "../api/createOrderAPI"
import GetOrdersAPI from "../api/getOrdersAPI"
import GetSingleOrderAPI from "../api/getSingleOrderAPI"
import UpdateOrderAPI from "../api/updateOrderAPI"
import DeleteOrderAPI from "../api/deleteOrderAPI"

export default class OrderActions {
  createOrder_checkStatusCode() {
    cy.step("Create the order")
    new CreateOrderAPI().createOrderAPI().then((response) => {
      expect(response.status).to.eq(201)
    })
  }

  checkOrderHasAnItem() {
    new GetOrdersAPI().getOrders().then((response) => {
      expect(response.body.length).to.eq(1)
    })
  }

  getSingleOrderWithEmptyComment() {
    new GetSingleOrderAPI().getSingleOrder().then((response) => {
      expect(response.body.comment).is.empty
    })
  }

  updateOrder_checkStatusCode() {
    new UpdateOrderAPI().updateOrder().then((response) => {
      expect(response.status).to.eq(204)
    })
  }

  checkUpdatedComment() {
    new GetSingleOrderAPI().getSingleOrder().then((response) => {
      expect(response.body.comment).is.not.empty
      expect(response.body.comment).to.eq("I wanna pick my order up at 6am.")
    })
  }

  deleteOrder_checkStatusCode() {
    new DeleteOrderAPI().deleteOrderOrder().then((response) => {
      expect(response.status).to.eq(204)
    })
  }

  getRemovedOrder_checkStatusCode() {
    new GetSingleOrderAPI().getSingleOrder().then((response) => {
      expect(response.status).to.eq(404)
    })
  }

  checkErrorDeletedOrder() {
    new GetSingleOrderAPI().getSingleOrder().then((response) => {
      expect(response.body.error).to.eq(
        `No order with id ${Cypress.env("orderID")}.`
      )
    })
  }
}
