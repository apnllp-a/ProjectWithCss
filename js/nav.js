let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-nav-toggle');

navBarToggle.addEventListener("click", function() {

    mainNav.classList.toggle('active');
});

let asideNav = document.getElementById('js-aside-menu')
let navBarToggle2 = document.getElementById('js-nav-toggle2');

navBarToggle2.addEventListener("click", function() {

    asideNav.classList.toggle('active');
});