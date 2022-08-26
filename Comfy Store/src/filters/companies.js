import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
    let companies = ['all', ...new Set(store.map(product => product.company))];
    const companiesDOM = getElement('.companies');
    companiesDOM.innerHTML = companies.map(company => {
        return `<button class="company-btn">${company}</button>`;
    }).join('');
    companiesDOM.addEventListener('click', (e) => {
        const element = e.target;
        if (element.classList.contains('company-btn')) {

            let newStore = [];
            if (element.textContent === 'all') {
                newStore = [...store];
            } else {
                newStore = store.filter(product => product.company === e.target.textContent);
            }
            display(newStore, getElement('.products-container'));
        }
    })

    const btnCategories = document.querySelectorAll(".company-btn");

    btnCategories.forEach(function (btn) {
        btn.addEventListener("click", function () {
            // console.log(btn);

            btnCategories.forEach(function (item) {
                if (item !== btn) {
                    item.classList.remove("show-borber-button");
                }
            });

            btn.classList.toggle("show-borber-button");
        });
    })
};

export default setupCompanies;

