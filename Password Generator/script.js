'use strict';

// Data
const numbers = '0123456789';
const lowerCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const upperCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


//            ELEMENTS

// Buttons and Cound elements
const minusBtn = document.querySelector(".minus");
const counterElement = document.querySelector(".counter");
const plusBtn = document.querySelector(".plus");


// Checkboxes
const uppercaseInput = document.getElementById("uppercase");
const lowercaseInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");

const passwordElement = document.querySelector(".password");



// Generate and Copy Buttons
const generateBtn = document.querySelector(".generate-btn");
const copyBtn = document.querySelector(".copy-btn");



// Backdrop and Modal
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");

const modalBtn = document.querySelector(".modal button");
const modalTitle = document.querySelector(".modal h2");
const modalMessage = document.querySelector(".modal p");




//            CODES

// Buttons and Cound elements
let counter = 6;
counterElement.textContent = counter;

plusBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (counter < 20) {
        counter++;
    }
    counterElement.textContent = counter;
});

minusBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (counter > 6) {
        counter--;
    }
    counterElement.textContent = counter;
})



// Checkboxes
const getRandomCharacter = () => {
    const characters = [];

    if (numbersInput.checked === true) {
        characters.push(
            numbers[Math.floor(Math.random() * numbers.length)]
        )
    }

    if (uppercaseInput.checked === true) {
        characters.push(
            upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
        )
    }

    if (lowercaseInput.checked === true) {
        characters.push(
            lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
        )
    }

    if (symbolsInput.checked === true) {
        characters.push(
            symbols[Math.floor(Math.random() * symbols.length)]
        )
    }

    if (characters.length === 0) {
        return "";
    }

    return characters[Math.floor(Math.random() * characters.length)]
};



// Generate and Copy Buttons

// let counter = 6;   setr 33 teyn olunub
generateBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let password = "";

    for (let i = 0; i < counter; i++) {
        password += getRandomCharacter()
    }

    passwordElement.textContent = password;
})

copyBtn.addEventListener('click', (event) => {
    event.preventDefault();

    backdrop.classList.add("active")
    modal.classList.add("active")

    const passwordValue = passwordElement.textContent;

    if (passwordValue) {
        modalTitle.textContent = "Success";
        modalTitle.style.color = "green";
        modalMessage.textContent = `Your password (${passwordValue}) successfully copied to clipboard`
    }else{
        modalTitle.textContent = "Error";
        modalTitle.style.color = "red";
        modalMessage.textContent = `There is nothing to copy`
    }
});

/* 
modalBtn.addEventListener('click', (event) => {
    event.preventDefault();

    backdrop.classList.remove("active")
    modal.classList.remove("active")
});

backdrop.addEventListener('click', (event) => {
    event.preventDefault();

    backdrop.classList.remove("active")
    modal.classList.remove("active")
});
*/

const closeModal = () => {
    backdrop.classList.remove("active");
    modal.classList.remove("active");
};

modalBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
});