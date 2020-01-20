'use strict';
// почему то скрипт работает только на первый блок, не понимаю почему
var star = document.querySelector('.star');
var starActive = document.querySelector('.star-active');
star.addEventListener('click', function() {
	starActive.classList.add('block-active');
	star.classList.add('star-no-active');
});
starActive.addEventListener('click', function() {
	starActive.classList.remove('block-active');
	star.classList.remove('star-no-active');
});