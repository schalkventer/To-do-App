/****************************************************************
 * Fade animation for speech bubble with 1.5s delay before start*
 ****************************************************************/

let bubble = document.getElementById("speach-bubble");
let noDisplay; bubble.style.display ="none";

const delay = setTimeout(bubbleAnimate,1500)

function bubbleAnimate()
{
    noDisplay = bubble.style.display ="block";
    bubble.style.animation="slidein 0.5s 1";
}

/****************************************************************
 * changes text in bubble with name input                       *
 ****************************************************************/

let welcome ="Welcome to your To-Do App"
let text;
function changetext()
{
    document.getElementById("userName").onsubmit = function changedtext()
    {
        text = document.getElementById("nameId");
        document.getElementById("speach-bubble").innerHTML = welcome + text.value;
    }
}

 
    