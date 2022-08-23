const btn = document.querySelector('.btn');
const url = './people.json';
btn.addEventListener('click', () => {
    getData(url);
})

function getData(url) {
    const xhr = new XMLHttpRequest();
    //console.log(xhr)
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const displayData = data.map((item) => {
                return `<p>${item.name}<\p>`
            }).join('');
            const element = document.createElement('div');
            element.innerHTML = displayData;
            document.body.appendChild(element);
        } else {
            console.log({
                status: xhr.status,
                text: xhr.statusText,
                state: xhr.readyState
            });
        }
    }
    xhr.send();
}


