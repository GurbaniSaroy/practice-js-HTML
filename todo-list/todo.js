let addBtn = document.getElementById('addButton');
let ol = document.getElementsByTagName('ol')[0];
let input = document.getElementById('inputTag');


addBtn.addEventListener("click", function () {
    if (input.value === "") {
        return;
    }
    //creating divs inside li -------------
    let items = document.createElement("li");
    let wrapper = document.createElement('div');
    let div1 =  document.createElement('div');
    let div2 =  document.createElement('div');
    items.appendChild(wrapper);
    wrapper.appendChild(div1);
    wrapper.appendChild(div2);

    div1.innerText = input.value;
    
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = 'Delete';
    
    wrapper.appendChild(deleteBtn);
    ol.appendChild(items);
    input.value = "";
    deleteBtn.addEventListener("click", function () {
        ol.removeChild(items);
    })

    // styling divs ---------------
    items.style.padding = '4px';
    wrapper.classList.add('wrapperContainer');
    div1.classList.add('subDiv1');
    div2.classList.add('subDiv2');
    deleteBtn.classList.add('deleteButton');
});

