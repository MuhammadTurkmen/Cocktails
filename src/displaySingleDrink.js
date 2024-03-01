import { hideLoading } from "./toggleLoading.js"
import get from "./getElement.js"
const displayDrink = (data) => {
    hideLoading()

    const drink = data.drinks[0]

}

export default displayDrink