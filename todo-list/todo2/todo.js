let addBtn = document.getElementById('addBtn');
let ol = document.getElementsByTagName('ol')[0];
let input = document.getElementById('input');


addBtn.addEventListener("click", function () {
    if (input.value === "") {
        console.log("btn click");
        return;
    }
    //creating divs inside li -------------
    // let check = document.createElement('input');
    // check.setAttribute('type', 'check');
    let items = document.createElement("li");
    let div1 =  document.createElement('div');
    let div2 =  document.createElement('div');
    let wrapper = document.createElement('div');
    items.appendChild(wrapper);
    wrapper.appendChild(div1);
    wrapper.appendChild(div2);

    div1.innerText = input.value;
    
    let updateBtn = document.createElement("button");
    updateBtn.innerText = 'Update';
    
    wrapper.appendChild(updateBtn);
    ol.appendChild(items);

    //----- remove the curr value for future inputs
    input.value = "";

    updateBtn.addEventListener("click", function () {
        ol.removeChild(items);
    })

    // styling divs ---------------
    items.classList.add('items');
    wrapper.classList.add('wrapperContainer');
    div1.classList.add('subDiv1');
    div2.classList.add('subDiv2');
    updateBtn.classList.add('btn');
});

