const images = [
  {
    image: "./img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "./img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "./img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "./img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "./img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

let carousel = document.querySelector(".carousel");
let carouselContent = "";

images.forEach((elem) => {
  carousel.innerHTML += `<div class="carousel-image d-none">
      <img src="${elem.image}" alt="Carousel Image" />
          <div class="carousel-content">
            <h2>${elem.title}</h2>
            <p>${elem.text}</p>
          </div>
     </div>
        `;
});

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let activeIndex = 0;

const cards = document.querySelectorAll(".carousel-image");

cards[activeIndex].classList.remove("d-none");

nextBtn.addEventListener("click", function () {
  cards[activeIndex].classList.add("d-none");

  if (activeIndex == images.length - 1) {
    activeIndex = 0;
  } else {
    activeIndex++;
  }
  cards[activeIndex].classList.remove("d-none");
});
