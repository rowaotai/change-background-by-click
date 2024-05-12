const mainImg = document.getElementById('main-img');
const all = document.querySelector('.all');

function change(photo) {
    mainImg.src = photo;
}

function colors(color) {
    all.style.backgroundColor = color;
}

