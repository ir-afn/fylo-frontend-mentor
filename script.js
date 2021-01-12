const nav = document.querySelector('.header__nav');
const upBtn = document.querySelector('.up-button');

window.onscroll = function () {
    if (window.pageYOffset > 300) {
        nav.classList.add('nav-scroll');
        upBtn.classList.add('shown');
    } else {
        nav.classList.remove('nav-scroll');
        upBtn.classList.remove('shown');
    };
};

upBtn.onclick = function () {
    window.scrollTo(0, 0);
};

