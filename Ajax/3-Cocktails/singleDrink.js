import fetchDrinks from "./src/fetchDrinks.js";
import displaySingelDrinks from "./src/displaySingleDrink.js";

const presentDrink = async () => {
    const id = localStorage.getItem('drink');
    if (!id) {
        window.localStorage.replace('index.html');
    } else {
        const drink = await fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        displaySingelDrinks(drink);
    }

}

window.addEventListener('DOMContentLoaded', presentDrink)