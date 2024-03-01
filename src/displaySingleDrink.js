import { hideLoading } from "./toggleLoading.js"
import get from "./getElement.js"
const displayDrink = (data) => {
    hideLoading()

    const drink = data.drinks[0]
    const {strDrinkThumb: image, strDrink: name, strInstructions: desc} = drink
 
}  
 
export default displayDrink 