import{bubbleAnimate} from '../js/bubble.js';

/****************************************************************
 * changes text in bubble with name input                       *
 ****************************************************************/


 let form = document.querySelector('.form');

 form.addEventListener('click', event =>{
 
     event.preventDefault();
 
     if(event.target.className === "submitBtn")
     {
 
     }
 
 })
 
 function changetext(text)
 {
     
     {
         text = document.getElementById("nameId");
         document.getElementById("speach-bubble").innerHTML = welcome + text.value;
     }
 }


