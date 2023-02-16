const btn = document.querySelectorAll('.dropdown-btn');
const nav = document.querySelectorAll('.nav__item-link');

btn.forEach(function (el) {
    el.addEventListener('click', function () {
        this.parentNode.classList.toggle('active');
    });
});
nav.forEach(function (el) {
    el.addEventListener('click', function () {
        this.parentNode.classList.toggle('nav__active');
    });
});

// slider category index.html
$('.slider-container').slider({
    speed: 600
});

// mobile burger
$(".menu-toggle").on('click', function()
  {
    $(this).toggleClass("on");
    $('.menu-section').toggleClass("on");
    $("nav ul").toggleClass('hidden');
});

// shop filter burger
let menuOpen = false;

const button = document.querySelector('.shop__filter-btn');

button.addEventListener('click', () => {
  document.body.classList.toggle('menuOpen');
});