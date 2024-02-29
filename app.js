import presentDrinks from './src/presentDrinks.js'
import './src/searchForm.js'
import { hideLoading } from './src/toggleLoading.js'
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a"

window.addEventListener('DOMContentLoaded', () => {
    presentDrinks(URL)

})