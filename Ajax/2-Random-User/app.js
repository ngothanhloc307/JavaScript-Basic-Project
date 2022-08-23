import getUser from "./ultils/fetchUser.js";
import displayUser from "./ultils/displayUser.js";
import getElement from "./ultils/getElement.js";

const btn = getElement('.btn');

const showUser = async () => {
    // get user from api
    const person = await getUser();
    displayUser(person);

    // display user



};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser)
