import home from './home.js';
import about from './about.js';
import contact from './contact.js';
import card from './card.js';
import {router} from './route.js';

console.log(router);

document.getElementById("route").onclick = function(e){
    switch(e.target.getAttribute("to")){
        case "home":
            router[0].innerHTML = "<home-component></home-component>"
         break;   
         case "about":
            router[0].innerHTML = "<about-component></about-component>"
         break; 
         case "contact":
            router[0].innerHTML = "<contact-component></contact-component>"
         break; 
    }
}