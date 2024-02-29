import fetchDrinks from "./fetchDrinks.js";

const showDrinks = async (url) => {
    // fetch drinks
    const data = await fetchDrinks(url)
    console.log(data);

    // display drinks
    
}

export default showDrinks