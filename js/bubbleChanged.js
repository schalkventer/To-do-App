import{bubbleAnimate} from '../js/bubble.js';

let form = document.querySelector('.form')

form.addEventListener('submit' , (e) => {
    
    e.preventDefault();

  const input = document.getElementById('input').value;
  let textChange = document.getElementById('speach-bubble');

  textChange.innerHTML = "Welcome to your To-do app \n" + input;
  bubbleAnimate(textChange)
});

bubbleAnimate(textChange)
{
    textChnage.style.display ="block";
    textChnage.style.animation="slidein 1.6s 1";
}