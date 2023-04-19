const init = () => {

    const buttPro = document.querySelector('.buttonPro');
    const buttPun = document.querySelector('.buttonPun');
    const buttDar = document.querySelector('.buttonDar');
    const buttSpo = document.querySelector('.buttonSpo');
    const buttRan = document.querySelector('.buttonRan')
    const jokes = document.querySelector('.jokes');

    buttPro.addEventListener('click', jokePro);
    buttPun.addEventListener('click', jokePun);
    buttDar.addEventListener('click', jokeDar);
    buttSpo.addEventListener('click', jokeSpo);
    buttRan.addEventListener('click', jokeRan);
    
function jokePro(){
    fetch('https://v2.jokeapi.dev/joke/Programming')
    .then(response => response.json())
    .then(data => {
        jokes.textContent = data.joke
    })
}

function jokePun(){
    fetch('https://v2.jokeapi.dev/joke/Pun')
    .then(response => response.json())
    .then(data => {
        jokes.textContent = data.joke
    })
}    

function jokeDar(){
    fetch('https://v2.jokeapi.dev/joke/Dark')
    .then(response => response.json())
    .then(data => {
        jokes.textContent = data.joke
    })
}

function jokeSpo(){
    fetch('https://v2.jokeapi.dev/joke/Spooky')
    .then(response => response.json())
    .then(data => {
        jokes.textContent = data.joke
    })
}

function jokeRan(){
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    }).then( response => response.json())
    .then(data => {
        jokes.textContent = data.joke
    })
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const keyword = document.getElementById('keyword');
    fetch("https://icanhazdadjoke.com/search?term=" + keyword.value, {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => { 
        console.log(data.results[0].joke)
        jokes.textContent = data.results[0].joke; 
    });
})

function mapJokes(joe){
    joe.forEach((element) => {
        const markup= `<li>${element.joke}</li>`;
        document.getElementById('jokess').insertAdjacentElement("beforeend", markup)

    }
)};

}

document.addEventListener("DOMContentLoaded", init)