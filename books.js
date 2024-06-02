let grid = document.querySelector(".wrapper");
let fliterinput = document.getElementById("searchbar");

// fetch('https://freetestapi.com/api/v1/books')
fetch('/list.json')
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

        if (span.innerHTML.toUpperCase().indexOf(filtervalue)>-1) {
            item[i].style.display = "initial";
        } else {
            item[i].style.display = "none";

        }
    }

    // console.log(filtervalue);
}

function addElement(appendin, value) {
    let div = document.createElement('div');
    div.className = "books";

    let {
        thumbnail,
        title,
        authors,
        categories
    } = value

    div.innerHTML = `
    <div class="books">
        <div class="details">
            <img src=${imagelinks.thumbnail} alt="" class="cover">
            <h2 class="title">${title}</h2>
            <h5 class="author">${authors}</h5>
            <h3 class="gener">genre: ${categories}</h3>
            <h3>$200 <span id="price">400</span></h3>
            <div class="review">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half"></i>
            </div>
        </div>
    </div>
    `

    appendin.appendChild(div);
}