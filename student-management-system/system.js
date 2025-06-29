let addBtn = document.getElementById('addBtn');
let container = document.getElementById('container');
let inputs = document.getElementsByTagName('input');
let stuName = document.getElementById('nameText');
let phyScore = document.getElementById('phyScore');
let chemScore = document.getElementById('chemScore');
let mathsScore = document.getElementById('mathsScore');
let submit = document.getElementById('btn');
let exit = document.getElementById('stop');
let para = document.getElementById('para');
let para2 = document.getElementById('para2');
let para3 = document.getElementById('para3');
let main = document.getElementById('main');
let result = document.getElementById('result');

container.style.display = 'none';
let totalStudent = 0;
let currStu = 0;

function togglingInpBox() {
    console.log("hidding");
    if (container.style.display === 'block') {
        container.style.display = 'none'
    } else {
        container.style.display = 'block'
    }
}
addBtn.addEventListener("click", () => {
    totalStudent = parseInt(prompt(`How many students do you want to add`));
    togglingInpBox();
});

exit.addEventListener('click', () => {
    currStu = totalStudent;
    printData();
})

let arr = new Array(totalStudent);

function ifPass(arr) {
    return arr.filter(marks => (marks.chem + marks.phy + marks.maths) / 3 >= 33);
}

function calaverage() {
    const total = arr.reduce((acc, s) => acc + (s.phy + s.chem + s.maths) / 3, 0);
    return (total / arr.length)
}
// ---------------Printing data --------------------------
function printData() {
    arr.map((k) => {
        // percentage calculation ---------------
        let total = [k.phy, k.chem, k.maths].reduce((res, ele) => res + ele, 0);
        let percentage = (total / 3);

        // grades ---------------
        let grade = percentage >= 90 ? 'O' : percentage >= 50 ? 'A' : percentage >= 33 ? 'B' : 'F';

        // printingInfo ---------------
        para.innerHTML += `<strong>Student name:</strong> ${k.name} , <strong>Physics: </strong>${k.phy}, <strong>Chemistry:</strong> ${k.chem} <strong>and Mathematics:</strong> ${k.maths}<br><strong>Average score are:</strong> ${percentage}<br><strong>Grades are:</strong> ${grade}<br><br>`;
    });

    // calculate average ---------------
    let av = calaverage();
    para2.innerHTML = `The total average score of this class is: ${av}`;
}

submit.addEventListener("click", () => {

    let student = {
        name: stuName.value,
        phy: parseInt(phyScore.value),
        chem: parseInt(chemScore.value),
        maths: parseInt(mathsScore.value)
    }
    arr.push(student);
    currStu++;
    alert(`total students are: ${totalStudent} current student:${currStu}`);

    stuName.value = '';
    phyScore.value = '';
    chemScore.value = '';
    mathsScore.value = '';

    if (currStu === totalStudent) {
        let heading = document.createElement('h1');
        main.appendChild(heading);
        heading.innerText = 'total limit reached';

        printData();

        // for(let k of arr){
        //     para.innerHTML += `<strong>Student name:</strong> ${k.name} , <strong>Physics: </strong>${k.phy}, <strong>Chemistry:</strong> ${k.chem} <strong>and Mathematics:</strong> ${k.maths}<br>`;
        //     let stuAvg = (k.phy+k.chem+k.maths)/3;
        //     if(stuAvg > 90){
        //         result.innerHTML += "Grade is O <br>";
        //     } else if( stuAvg > 50){
        //         result.innerHTML += "Grade is B+ <br>";
        //     } else{
        //         result.innerHTML += "Grade is C <br>";
        //     }
        //     para2.innerHTML += `<strong>Averge marks of this student are: </strong>${stuAvg} <br>`;
        // }

        // OR (use filter, map as done above) -----------------------------

    }
});


