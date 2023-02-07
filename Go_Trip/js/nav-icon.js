const navBtn = document.querySelector('.nav__icon');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function() {
	nav.classList.toggle('nav__mobile')
    menuIcon.classList.toggle('menu-icon-active');
	document.body.classList.toggle('no-scroll');
};