'use strict';
// почему то скрипт работает только на первый блок, не понимаю почему
var star = document.getElementById('star');
var starActive = document.getElementById('star-active');

star.addEventListener('click', function() {
    starActive.classList.add('block-active');
    star.classList.add('star-no-active');
});
starActive.addEventListener('click', function() {
    starActive.classList.remove('block-active');
    star.classList.remove('star-no-active');
});