import CreateCartAPI from "../api/createCartAPI"
import ListProductsAPI from "../api/listProductsAPI"
import AddItemAPI from "../api/addItemCartAPI"
import GetCartAPI from "../api/getCartAPI"
import CreateCartVariables from "../variables/createCartVariables"
import ListProductVariables from "../variables/listProductVariables"
import ItemVariables from "../variables/itemVariables"

describe("Add item to the cart", () => {
    let createCartAPI: CreateCartAPI
    let listProductsAPI: ListProductsAPI
    let addItemAPI: AddItemAPI
    let getCart: GetCartAPI
    let createCartVariables: CreateCartVariables
    let listProductVariables: ListProductVariables
    let itemVariables: ItemVariables

    before(() => {
        createCartAPI = new CreateCartAPI()
        listProductsAPI = new ListProductsAPI()
        addItemAPI = new AddItemAPI()
        getCart = new GetCartAPI()
        createCartVariables = new CreateCartVariables()
        listProductVariables = new ListProductVariables()
        itemVariables = new ItemVariables()

        listProductsAPI.getListProducts(listProductVariables)
        createCartAPI.createCart(createCartVariables)
    })

    it("Should have status 201 after adding the item to the cart", () => {
        addItemAPI
            .addItem(createCartVariables, listProductVariables)
            .then((response) => {
                expect(response.status).to.eq(201)
            })
    })

    it("The cart should have an item", () => {
        getCart.getCartAPI(createCartVariables).then((response) => {
            expect(response.body.items.length).to.eq(1)
        })
    })

    it("Check the desired item was added", () => {
        getCart.getCartAPI(createCartVariables).then((response) => {
            let productFound = false

            const product = response.body.items.find(
                product =>
                    product.id === itemVariables.getItemID() &&
                    product.productId === listProductVariables.getFreshProduct()
            )
            if (product) {
                cy.log("I/m in")
                productFound = true
            }
            expect(productFound).to.be.true
            expect(response.body.items[0].quantity).to.eq(1)
        })
    })
})
