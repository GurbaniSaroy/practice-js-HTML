let pass1 = document.getElementById('textbox1');
let pass2 = document.getElementById('textbox2');
let container = document.getElementById('container');

pass2.addEventListener("keyup", function (e) {
    val(e.target.value)
});

let isVisible1 = false;
let isVisible2 = false;

function eye(tag) {
    if(tag.id === 'pass1open'){
        isVisible1 = !isVisible1; 
        pass1.type = isVisible1 ? 'text' : 'password';
    }
    else if(tag.id === 'pass2open'){
        isVisible2 = !isVisible2; 
        pass2.type = isVisible2 ? 'text' : 'password';
    }
    tag.classList.toggle('fa-eye-slash');
    tag.classList.toggle('fa-eye');
}

const val = (input) => {
    container.innerHTML = '';
    let message = document.createElement('h2');
    message.innerText = 'hey';
    container.appendChild(message);

    if (pass1.value === input) {
        message.innerText = 'your password is a match';
        message.style.color = 'green';
    }
    else {
        message.innerText = 'your password is not a match';
        message.style.color = 'red';
    }
}

seePass.addEventListener("click", () => {

})