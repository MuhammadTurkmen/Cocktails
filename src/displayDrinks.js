import get from './getElement.js'

const displayDrinks = ({drinks}) => {
    const section = get('.section-center')
    const title = get('.title')
    if(!drinks) {
        title.textContent = `sorry, no drinks matched your search`
        section.innerHTML = null
        
    }
}

export default displayDrinks