import CreateCartVariables from "../variables/createCartVariables"
import ItemVariables from "../variables/itemVariables"
import ListProductVariables from "../variables/listProductVariables"

export default class AddItemAPI {
  addItem(
    createCartVariables: CreateCartVariables,
    listProductVariables: ListProductVariables
  ) {
    return cy
      .api({
        url: `/carts/${createCartVariables.getCartID()}/items`,
        method: "POST",
        body: {
          productId: `${listProductVariables.getFreshProduct()}`,
        },
      })
      .then((response) => {
        new ItemVariables().setItemID(response.body.itemId)
      })
  }
}
