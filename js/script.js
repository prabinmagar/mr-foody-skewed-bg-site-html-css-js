
const navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('change-icon');
    document.querySelector('.navbar-collapse').classList.toggle('show-navbar');
});