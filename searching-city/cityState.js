let heading = document.getElementById('heading');
let box1 = document.getElementById('select1');
let box2 = document.getElementById('select2');


const state = {
    Haryana: ['Faridabad', 'Gurugram', 'Panipat', 'Ambala', 'Yamunanagar', 'Rohtak', 'Hisar', 'Karnal', 'Sonipat', 'Panchkula'],

    Punjab: ['Amritsar', 'Chandigarh', 'Ludhiana', 'Jalandhar', 'Bathinda', 'Patiala'],

    JK: ['Jammu', 'Udhampur', 'Katra', 'Srinagar', 'Pahalgam', 'Gulmarg', 'Leh']
}

function selectingState() {
    for (let key in state) {
        let val = document.createElement('option');
        val.value = key
        val.innerText = key;
        box1.appendChild(val);
    }

}
function selectingCity(selVal) {
    box2.innerText = " ";
    for (let i in state) {
        if (selVal === i) {
            for (let is in state[selVal]) {
                let val1 = document.createElement('option');
                val1.value = state[selVal][is];
                val1.innerText = state[selVal][is];
                box2.appendChild(val1);
                console.log(state[selVal][is]);

            }
        }
    }
}
selectingState();

// box1.addEventListener("change", ()=>{
// })
function change1(value) {
    heading.innerText = `You selected ${value}`
}
function fxn(value) {
    console.log('change detected');
}