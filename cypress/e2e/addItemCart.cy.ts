import CreateCartAPI from "../api/createCartAPI"
import ListProductsAPI from "../api/listProductsAPI"
import AddItemAPI from "../api/addItemCartAPI"
import GetCartAPI from "../api/getCartAPI"

describe("Add item to the cart", () => {
    let createCartAPI: CreateCartAPI
    let listProductsAPI: ListProductsAPI
    let addItemAPI: AddItemAPI
    let getCart: GetCartAPI

    before(() => {
        createCartAPI = new CreateCartAPI()
        listProductsAPI = new ListProductsAPI()
        addItemAPI = new AddItemAPI()
        getCart = new GetCartAPI()

        listProductsAPI.getListProducts()
        createCartAPI.createCart()
    })

    it("Should have status 201 after adding the item to the cart", () => {
        addItemAPI
            .addItem()
            .then((response) => {
                expect(response.status).to.eq(201)
            })
    })

    it("The cart should have an item", () => {
        getCart.getCartAPI().then((response) => {
            expect(response.body.items.length).to.eq(1)
        })
    })

    it("Check the desired item was added", () => {
        getCart.getCartAPI().then((response) => {
            expect(response.body.items[0].quantity).to.eq(1)
            expect(response.body.items[0].productId).to.eq(Cypress.env("productID"))
            expect(response.body.items[0].id).to.eq(Cypress.env("itemID"))
        })
    })
})
