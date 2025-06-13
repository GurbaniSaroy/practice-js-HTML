let inputTxt = document.getElementsByClassName('inputtext');
let enter = document.getElementById("enter");
let h = document.getElementById('h')

for (let i = 0; i <= 2; i++) {

    inputTxt[i].addEventListener("keyup", (e) => {
        fxn(e.target.value);
    });

    const fxn = (input) => {
        if (input.length === 4) {
            inputTxt[i + 1].focus();
        }
    }
}
