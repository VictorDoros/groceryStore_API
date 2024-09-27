import ListProductsAPI from "../api/listProductsAPI"
import CreateCartAPI from "../api/createCartAPI"
import AddItemAPI from "../api/addItemCartAPI"
import RegisterAPIClient from "../api/registerAPIClient"
import CreateOrderAPI from "../api/createOrderAPI"
import GetOrdersAPI from "../api/getOrdersAPI"
import GetSingleOrderAPI from "../api/getSingleOrderAPI"
import UpdateOrderAPI from "../api/updateOrderAPI"
import DeleteOrderAPI from "../api/deleteOrderAPI"

describe(
  "Create, update and delete the order",
  { tags: ["@manageOrders"] },
  () => {
    let listProductsAPI: ListProductsAPI
    let createCartAPI: CreateCartAPI
    let addItemAPI: AddItemAPI
    let registerAPIClient: RegisterAPIClient
    let createOrderAPI: CreateOrderAPI
    let getOrdersAPI: GetOrdersAPI
    let getSingleOrderAPI: GetSingleOrderAPI
    let updateOrderAPI: UpdateOrderAPI
    let deleteOrderAPI: DeleteOrderAPI

    before(() => {
      listProductsAPI = new ListProductsAPI()
      createCartAPI = new CreateCartAPI()
      addItemAPI = new AddItemAPI()
      registerAPIClient = new RegisterAPIClient()
      createOrderAPI = new CreateOrderAPI()
      getOrdersAPI = new GetOrdersAPI()
      getSingleOrderAPI = new GetSingleOrderAPI()
      updateOrderAPI = new UpdateOrderAPI()
      deleteOrderAPI = new DeleteOrderAPI()

      registerAPIClient.registerAPIClient()
      listProductsAPI.getListProducts()
      createCartAPI.createCart()
    })

    it("Should have status 201 after creating a new cart", () => {
      addItemAPI.addItem().then((response) => {
        expect(response.status).to.eq(201)
      })

      createOrderAPI.createOrderAPI().then((response) => {
        expect(response.status).to.eq(201)
      })
    })

    it("Should have an item inside the order", () => {
      getOrdersAPI.getOrders().then((response) => {
        expect(response.body.length).to.eq(1)
      })
    })

    it("Should get a single order and check that the comment is empty", () => {
      getSingleOrderAPI.getSingleOrder().then((response) => {
        expect(response.body.comment).is.empty
      })
    })

    it("Should have status 204 after updating the order", () => {
      updateOrderAPI.updateOrder().then((response) => {
        expect(response.status).to.eq(204)
      })
    })

    it("Should have the updated comment", () => {
      getSingleOrderAPI.getSingleOrder().then((response) => {
        expect(response.body.comment).is.not.empty
        expect(response.body.comment).to.eq("I wanna pick my order up at 6am.")
      })
    })

    it("Should have status 204 after deleteing the order", () => {
      deleteOrderAPI.deleteOrderOrder().then((response) => {
        expect(response.status).to.eq(204)
      })
    })

    //   it("Should receive the corresponding error that the orderID was not found", () => {
    //     deleteOrderAPI.deleteOrderOrder().then((response) => {
    //       expect(response.body.error).to.eq(
    //         `No order with id ${Cypress.env("orderID")}.`
    //       )
    //     })
    //   })
  }
)
