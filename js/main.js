
import { getData } from "./modules/dataMiner.js";
//imports always go at the top the file
//this is called a IIFE
//it's a pretty common Javascript programming pattern
//also called 

(() => {
  
  console.log('fired!');

  //debugger;

  let theTeam = document.querySelector('#team-section'),
      theTemplate = document.querySelector('#bio-template').content,
      buttonContainer = document.querySelector(".queryControls");

  function buildTeam(data) {



    const people = Object.keys(data); // Object.keys creats an array

    people.forEach (prof =>{

      let panel = theTemplate.cloneNode(true);
      let containers = panel.firstElementChild.children;

      containers[0].querySelector('img').src= `images/${data[prof].avatar}`;

      containers[1].textContent = data[prof].name;
      containers[2].textContent = data[prof].role;
      containers[3].textContent = data[prof].nickname;

      theTeam.appendChild(panel);
    })

  }

  function buildJoke(joke) {
    let jokeText = document.querySelector(".query-result");

    jokeText.textContent = joke.value;
  }

  function addCatButtons(categories) {
    let activeButtons = categories.filter(item => item !== "explicit").slice(0, 6);

    activeButtons.forEach(button => {
      let buttonEl = `<button class="joke-button" data-cat=${button}>${button}</button>`;

      buttonContainer.innerHTML += buttonEl;
    })
    
  }

  function getJoke(event) {
    debugger;
    // if there's not category on a click, then don't do anything
    // because that'll just throw an error -> category targetCategory won't be  defined
    if (!event.target.dataset.cat) {
      return;
    };
    // if there IS a custom data attribute,
    // (clicked on a button), retrieve it and 
    // use that as the categorty query parameter
    let targetCategory = event.target.dataset.cat;

    getData(`https://api.chucknorris.io/jokes/random?category=${targetCategory}`, buildJoke);
  }

  // getData("./data.json", buildTeam);
  // getData("https://api.chucknorris.io/jokes/random", buildJoke);

  // use event delegation to handle clicks on each button
  buttonContainer.addEventListener("click", getJoke);

  getData("https://api.chucknorris.io/jokes/categories", addCatButtons);
})();