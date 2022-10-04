
import { getData } from "./modules/dataMiner.js";
//imports always go at the top the file
//this is called a IIFE
//it's a pretty common Javascript programming pattern
//also called 

(() => {
  
  console.log('fired!');

  //debugger;

  let theTeam = document.querySelector('#team-section'),
      theTemplate = document.querySelector('#bio-template').content;


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

  getData("./data.json", buildTeam);
  getData("https://api.chucknorris.io/jokes/random", buildJoke);
})();