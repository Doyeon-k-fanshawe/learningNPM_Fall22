// imports always go at the top of the file
// this is called an IIFE (immediately invoked function expression)
import { person } from "./modules/data.js";

// it's a pretty common JavaScript programming pattern
// also called a module file
(() => {
  console.log("fired!");

  let theTeam = document.querySelector("#team-section"),
      theTemplate = document.querySelector("#bio-template").content;

  
  function loadData() {
    // get all the keys (names) from the data object and use that to
    // iterate through the data
    const people = Object.keys(person); // Object.keys creates an array

    people.forEach(prof => {
      // copy the template's contents
      let panel = theTemplate.cloneNode(true);
      // get a reference to the template's elements
      let containers = panel.firstElementChild.children;

      // grab the image from the object and set it as the source
      containers[0].querySelector("img").src = `images/${person[prof].avatar}`;

      containers[1].textContent = person[prof].name;
      containers[2].textContent = person[prof].role;
      containers[3].textContent = person[prof].nickname;

      theTeam.appendChild(panel);
    })
  }

  loadData();

})();