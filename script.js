const mobileContainer = document.querySelector('.mobile-container');
const navBar = document.querySelector('.nav-bar');
const intro = document.querySelector('.introduction');
const container = document.querySelector('#content');
const footer = document.querySelector('footer');

mobileContainer.addEventListener('click', function() {
    navBar.classList.toggle('open');
    intro.classList.toggle('open');
    container.classList.toggle('open');
    footer.classList.toggle('open');
})

navBar.addEventListener('click', function() {
    navBar.classList.remove('open');
    intro.classList.remove('open');
    container.classList.remove('open');
    footer.classList.remove('open');
})