import ListProductVariables from "../variables/listProductVariables"
import SingleProductVariables from "../variables/singleProductVariables"

export default class SingleProductAPI {
  getSingleProduct(
    listProductVariables: ListProductVariables,
    singleProductVariables: SingleProductVariables
  ) {
    return cy
      .api({
        url: `/products/${Number(listProductVariables.getFreshProduct())}`,
        method: "GET",
      })
      .then((response) => {
        singleProductVariables.setProductCurrentStock(
          response.body["current-stock"]
        )
      })
  }
}
