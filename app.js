let input = document.querySelector('#input');
let button = document.querySelector('button');
let list = document.querySelector('#list');

button.addEventListener('click', function (event) {
    let searchedText = input.value;
    fetchData(searchedText);
    input.value = "";
})

function fetchData(searchedText) {
    // using axios
    // axios.get(`https://api.tvmaze.com/search/shows?q=${searchedText}`)
    //     .then(function (response) {
    //         console.log(response.data);
    //         manipulateDOM(response.data);
    //     })

    // using fetch
    fetch(`https://api.tvmaze.com/search/shows?q=${searchedText}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            manipulateDOM(data);
        })
}

function manipulateDOM(allTheData) {
    // to remove already present data
    while (list.firstChild) {
        list.firstChild.remove();
    }

    for (data of allTheData) {
        let figure = document.createElement('figure');
        figure.innerHTML = `
        <img src = ${data.show.image.medium} />
        <h2>Name : ${data.show.name}</h2>
        <h5>Language : ${data.show.language}</h5>
        `
        list.appendChild(figure);
    }
}

// console.log(`${data.show.name}`)