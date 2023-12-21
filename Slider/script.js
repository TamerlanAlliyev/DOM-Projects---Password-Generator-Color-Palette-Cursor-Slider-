'use strict';

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

const [leftBtn, rightBtn] = document.querySelectorAll('button');


let index = 0;

rightBtn.addEventListener('click', () => {
    if (index < slides.length - 3) {
        index++;
    } else {
        index = 0;
    }
    slider.style.transform = `translateX(-${310 * index}px)`; 
    console.log(index);
});

leftBtn.addEventListener('click', () => {
    if (index < 0) {
        index = slides.length - 3;
    } else {
        index--;
    }
    slider.style.transform = `translateX(-${310 * index}px)`; 
    console.log(index);
});
