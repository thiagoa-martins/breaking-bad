const divCard = document.querySelector("#card");

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
    let contentCard = "";
  
    console.log(response[0]);

    contentCard = `
        <img src="${response[0].img}" alt="#">
            
        <h3>${response[0].name}</h3>

        <h4>apelido: ${response[0].nickname}</h4>

        <span>ocupação: ${response[0].occupation.join(", ")}</span>
    `;

    const occupation = response[0].occupation;
    console.log(occupation);

    divCard.innerHTML = contentCard;
};

queryAPI() 
 .then(convertDataJSON)
 .then(dataCharacters)