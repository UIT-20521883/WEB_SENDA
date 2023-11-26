let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-3');
let scrolTop=document.querySelector('.scroll-top');

menu.addEventListener('click', () => {
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
});

window.onscroll = () => {
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
	if (window.scrollY > 250) {
		header.classList.add('active');
	}
	else {
		header.classList.remove('active');
	}
	
	if (window.scrollY > 250) {
		scrolTop.style.display='initial';
	}
	else {
		scrolTop.style.display='none';
	}
}

var swiper = new Swiper(".home-slider", {
    observer: true,
    observeParents: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	loop: true,
});



