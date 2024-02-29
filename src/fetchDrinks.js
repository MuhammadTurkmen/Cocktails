

const fetchDrinks = async (url) => {
    try {
        const response = await fetch(url) 
        const data = await response.json()
    } catch (error) {
        
    }
}

export default fetchDrinks