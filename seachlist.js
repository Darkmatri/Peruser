const searchList = document.querySelector('#books');

fetch('./books.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(post => {
            searchList.insertAdjacentHTML('beforeend', `<div class="details">
                <section id="cover">
                    <img src="${post.image}" alt="" >
                </section>
                    <h2 class="title">${post.name}</h2>
                    <h5 class="author">${post.author}</h5>
                    <h3 class="gener">${post.category}</h3>
                    <h3>${post.price} <span id="price">${post.span}</span></h3>
                    <div class="review">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half"></i>
                    </div>
                </div>`);
        });
    });

const fliterproducts = () => {
    const searchbar = document.getElementById('searchbar').value.toUpperCase();
    const searchitem = document.getElementById('books').querySelectorAll('.details');
    const pname = document.querySelectorAll('.title');
    const pauthor = document.querySelectorAll('.author');
    const pcategory = document.querySelectorAll('.gener');
    
    for (let i = 0; i < searchitem.length; i++) {
        if (pname[i].innerHTML.toUpperCase().indexOf(searchbar) > -1 || pauthor[i].innerHTML.toUpperCase().indexOf(searchbar) > -1 || pcategory[i].innerHTML.toUpperCase().indexOf(searchbar) > -1) {
            searchitem[i].style.display = '';
        } else {
            searchitem[i].style.display = 'none';
        }
    }
}