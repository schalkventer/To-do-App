
/****************************************************************
 * changes text in bubble with name input                       *
 ****************************************************************/

const STORAGE_KEY = "Username";

class User{
    constructor(id, usernameInput)
    {
    this.id = id;
    this.userName = usernameInput;
    }

get getUsername()
{
   return this.username; 
}

set setUsername(newName)
{
    this.username = newName;
}

}

let displayName = document.querySelector('.submitBtn');

displayName.addEventListener("click", (e) => {

    let userInput = document.getElementById('input').value;

    let user = new User(userInput);

    user = JSON.stringify(user);

    localStorage.setItem(STORAGE_KEY,user)
})