let pass1 = document.getElementById('textbox1');
let pass2 = document.getElementById('textbox2');
let container = document.getElementById('container');

pass2.addEventListener("keyup", function (e) {
    val(e.target.value)
});

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