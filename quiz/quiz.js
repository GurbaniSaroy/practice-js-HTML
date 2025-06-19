let Btn = document.getElementById('Btn');
let timerPara = document.getElementById('timerPara');
let ans1 = document.getElementsByClassName('ans1');
let ans2 = document.getElementsByClassName('ans2');
let ans3 = document.getElementsByClassName('ans3');
let ans4 = document.getElementsByClassName('ans4');
let inputs = document.getElementsByTagName('input');
let footPara = document.getElementById('footPara');
const answers = {
    ans1: 'delhi',
    ans2: 'yellow',
    ans3: 'camel',
    ans4: 'lion'
};
const questions = 4;
for(i in inputs){
    inputs[i].disabled = true;
}

Btn.addEventListener('click', () => {
    for(j in inputs){
    inputs[j].disabled = false;
}
    let i = 10;
    let interval = setInterval(() => {
        timerPara.classList.add('timer');
        timerPara.innerText = `Timer: ${i}`;
        if (i === 0) {
            timerPara.innerText = `Timer: ${i}`;
            clearInterval(interval);
            alert("TIMER IS UP");
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].disabled = true;
            }
        }
        i--;
    }, 1000);
});

let score = 0;

for (let k = 0; k < inputs.length; k++) {
    inputs[k].addEventListener("click", check);
}
function check(e) {
    let ansClass = e.target.className;
        if (answers[ansClass] === e.target.value) {
            console.log("inside loop");
            score += 4;
            footPara.innerText = `Your current scores are ${score}/${questions*4}`;

        }
        let option = document.getElementsByClassName(ansClass);
        for(let i = 0; i<questions; i++){
            console.log("inside 2 loop");
            option[i].disabled = true;
        }
}