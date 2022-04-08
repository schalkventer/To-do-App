import{bubbleAnimate} from '../js/bubble.js';


let form = document.querySelector('.form')


form.addEventListener('submit' , (e) => {
    
    e.preventDefault();

  const input = document.getElementById('input').value;
  let textChnage = document.getElementById('speach-bubble');

  textChnage.innerHTML = "Welcome to your To-do app \n" + input;
  
});

bubbleAnimate()