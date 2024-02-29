import fetchDrinks from "./fetchDrinks.js";

const showDrinks = async (url) => {
    const data = await fetch(url)
    console.log(url);
    // fetch drinks
    // display drinks
}

export default showDrinks