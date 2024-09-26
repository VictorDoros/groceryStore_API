import CreateCartVariables from "../variables/createCartVariables"

export default class GetCartAPI {
    getCartAPI(createCartVariables: CreateCartVariables) {
        return cy.api({
            url: `/carts/${createCartVariables.getCartID()}`,
            method: "GET"
        })
    }
}