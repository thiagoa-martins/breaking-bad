const divCards = document.querySelector("#cards");
const divMobile = document.querySelector("#menuMobile");
const buttonHamburger = document.querySelector("#hamburger");

const queryAPI = () => {
    return fetch("https://www.breakingbadapi.com/api/");
};

const convertDataJSON = response => response.json();

const dataCharacters = data => {
    const url = data.characters;

    fetch(url)
     .then(convertDataJSON)
     .then(showCharacters)
};

const showCharacters = response => {
    const array = response;
    const numberOfCharacters = 8;

    let card = "";

    for (let i = 0; i <= numberOfCharacters; i++) {
        const img = array[i].img;
        const name = array[i].name;
        const nickname = array[i].nickname;
        const occupation = array[i].occupation.join(", ");

        card += `
            <div class="card">
                <img src="${img}" alt="${name}">
                    
                <h3>${name}</h3>

                <h4 class="nickname">apelido:</h4>

                <span>${nickname}</span>

                <span class="occupation">ocupação:</span>

                <span>${occupation}</span>
            </div>  
        `;
    }

    divCards.innerHTML = card;
};

queryAPI() 
 .then(convertDataJSON)
 .then(dataCharacters)

buttonHamburger.addEventListener("click", () => {
    divMobile.classList.toggle("show");
});