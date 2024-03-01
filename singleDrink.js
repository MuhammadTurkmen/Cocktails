import fetchDrinks from './src/fetchDrinks.js'
import displayDrink from './src/displaySingleDrink.js'

const presentDrink = async () => {
    const id = localStorage.getItem('drink')
    fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
}

window.addEventListener('DOMContentLoaded', presentDrink)