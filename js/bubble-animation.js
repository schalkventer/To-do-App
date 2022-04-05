let bubble = document.getElementById("speach-bubble");
let noDisplay; bubble.style.display ="none";

const delay = setTimeout(bubbleAnimate,1500)

function bubbleAnimate()
{
    noDisplay = bubble.style.display ="block";
    bubble.style.animation="slidein 0.5s 1";
}
 


 
    