import get from './getElement.js'

const displayDrinks = ({drinks}) => {
    const section = get('.section-center')
    const title = get('.title')
    if(!drinks) {
        // hide loading
        title.textContent = `sorry, no drinks matched your search`
        section.innerHTML = null
        return
    }
    const newDrinks = drinks.map((drink) => {

    })
}

export default displayDrinks