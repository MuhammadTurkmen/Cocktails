import fetchDrinks from './src/fetchDrinks.js'
import displayDrink from './src/displaySingleDrink.js'

const presentDrink = async () => {
    fetchDrinks()
}

window.addEventListener('DOMContentLoaded', presentDrink)