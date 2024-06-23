let fliterinput = document.getElementById("searchbar");
let http = new XMLHttpRequest();
let grid = document.querySelector(".cards");

fetch("/list.json")
    .then(res => res.json())
    .then(json => {
        for (let value of json) {
            addElement(grid, value);
        }
    });

fliterinput.addEventListener('keyup', fliterproducts);

function fliterproducts() {
    let filtervalue = fliterinput.value.toUpperCase();
    let item = grid.querySelectorAll('.details')

    for (let i = 0; i < item.length; i++) {
        let span = item[i].querySelector(".title");

        if (span.innerHTML.toUpperCase().indexOf(filtervalue) > -1) {
            item[i].style.display = "";
        } else {
            item[i].style.display = "none";

        }
    }

    // console.log(filtervalue);
}

http.open('get', 'list.json', true);

http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let products = JSON.parse(this.responseText);

        let out = "";
        for(let item of products){
            out += `
            <div class="books">
                <div class="details">
                    <img src="${item.image}" alt="" class="cover">
                    <h2 class="title">${item.name}</h2>
                    <h5 class="author">${item.author}</h5>
                    <h3 class="gener">${item.category}</h3>
                    <h3>${item.price} <span id="price">${item.span}</span></h3>
                    <div class="review">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half"></i>
                    </div>
                </div>
            </div>
            `;
        }
        document.querySelector(".cards").innerHTML = out;
    }
}