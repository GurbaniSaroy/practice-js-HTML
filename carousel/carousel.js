let img = document.getElementById('images');
let previous = document.getElementById('previous');
let forward = document.getElementById('forward');
const arr = ['Assets/img1.webp', 'Assets/img2.webp', 'Assets/img3.webp', 'Assets/img5.webp', 'Assets/img6.webp', 'Assets/img7.webp', 'Assets/img9.webp', 'Assets/img10.webp'];
let total = arr.length;
let i = 0;

function setImage(x){
    img.src = arr[x];
}
setInterval(()=>{
    if(i === total){
        i=0;
    }
    setImage(i);
    console.log("next printing");
    i++;
}, 3000);

previous.addEventListener("click", ()=>{
    console.log(i)
    
    i--;
    if(i <0){
        i=total-1;
    }
    setImage(i);
    console.log("fxn call previous");
});

forward.addEventListener("click", ()=>{
      console.log(i)
    i++;
      if(i >= total){
        i=0;
        
    }
    
    setImage(i);
    console.log("fxn call forward");
});