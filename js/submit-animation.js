let welcome ="Welcome to your To-Do App"

windows.onload = function()
{
    document.getElementById("userName").onsubmit = function()
    {
        let text = document.getElementById("nameId");
        let changebox = document.getElementById("speach-bubble").innerHTML = welcome + " " + text;
    }
}

