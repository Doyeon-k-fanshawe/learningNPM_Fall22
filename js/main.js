// imports always go at the top of the file
// this is called an IIFE (immediately invoked function expression)
import { person } from "./modules/data.js";

// it's a pretty common JavaScript programming pattern
// also called a module file
(() => {
  console.log("fired!");

  
  function loadData() {
    let theName = document.querySelector(".user-name"),
        theDesc = document.querySelector(".user-bio");

    // refer to the object's keys (person) and use those values to update
    // the app
    theName.textContent = person.name;
    theDesc.textContent = person.desc;

    person.sayHello();
  }

  loadData();

})();