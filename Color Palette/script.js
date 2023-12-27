//   ƏLAVƏLƏR  ->  1. Hər hansı rəng click olunubsa class-ı "active" olaraq qalır
//                 2. "Esc" düyməsi və "body" click olunduqda "active" class silinir

'use strict';

const colors = document.querySelectorAll(".color");

colors.forEach((color) => {
    color.addEventListener("mouseover", () => {
        if (!color.classList.contains("clicked")) {
            color.classList.add("active");
        }
    });

    color.addEventListener("mouseout", () => {
        if (!color.classList.contains("clicked")) {
            color.classList.remove("active");
        }
    });

    color.addEventListener("click", (event) => {
        event.stopPropagation();

        colors.forEach((c) => {
            c.classList.remove("clicked");
            c.classList.remove("active");
        });

        color.classList.add("clicked");
        color.classList.add("active");
    });
});

document.addEventListener("click", (event) => {
    const clickedInsideColors = event.target.closest('.color');

    if (!clickedInsideColors) {
        colors.forEach((color) => {
            color.classList.remove("active");
        });
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        colors.forEach((color) => {
            color.classList.remove("clicked");
            color.classList.remove("active");
        });
    }
});
