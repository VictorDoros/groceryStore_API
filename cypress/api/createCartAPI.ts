import CreateCartVariables from "../variables/createCartVariables"

export default class CreateCartAPI {
  createCart(createCartVariables: CreateCartVariables) {
    return cy
      .api({
        url: "/carts",
        method: "POST",
      })
      .then((response) => {
        createCartVariables.setCartID(response.body.cartId)
      })
  }
}
