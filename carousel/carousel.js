let img = document.getElementById('images');
let previous = document.getElementById('previous');
let forward = document.getElementById('forward');
const arr = ['Assets/img1.webp', 'Assets/img2.webp', 'Assets/img3.webp', 'Assets/img5.webp', 'Assets/img6.webp', 'Assets/img7.webp', 'Assets/img9.webp', 'Assets/img10.webp'];

let i = 0;
function setImage(i){
    if(i === arr.length){
        i=0;
    }
    img.src = arr[i];
}
setInterval(()=>{
    setImage(i);
    console.log("next printing");
    i++;
}, 3000);

previous.addEventListener("click", ()=>{
    if(i === 0){
        setImage(arr.length);
        return;
    }
    setImage(i--);
    console.log("fxn call");
    setInterval(()=>{
    }, 500);
});

forward.addEventListener("click", ()=>{
    if(i === arr.length){
        setImage(0);
        return;
    }
    setImage(i++);
    console.log("fxn call");
    setInterval(()=>{
    }, 500);
});