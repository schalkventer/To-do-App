/****************************************************************
 * Fade animation for speech bubble with 1.5s delay before start*
 ****************************************************************/

let bubble = document.getElementById("speach-bubble");
let noDisplay; bubble.style.display ="none";

const delay = setTimeout(bubbleAnimate,1500)

export function bubbleAnimate()
{
    noDisplay = bubble.style.display ="block";
    bubble.style.animation="slidein 1.6s 1";

}



 
    