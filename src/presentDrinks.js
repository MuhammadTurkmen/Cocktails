import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";

const showDrinks = async (url) => {
    // fetch drinks
    const data = await fetchDrinks(url)
    console.log(data);

    // display drinks
    const section = await displayDrinks(data)
}

export default showDrinks