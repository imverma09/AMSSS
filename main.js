const nav = document.querySelector(".nav")
const bars = document.querySelectorAll(".bars")
bars[1].addEventListener("click", () => {
    nav.classList.add("nav-show");
    bars[0].style.display = " block"
    bars[1].style.display = "none"
    console.log("hello11")
})
console.log(bars[0])
bars[0].addEventListener("click", () => {
    nav.classList.remove("nav-show");
    bars[1].style.display = " block"
    bars[0].style.display = "none"
    console.log("hello")
})
const images = document.querySelectorAll(".carousel-image")
let idx = 0
images[idx].style.display = "block";
setInterval(() => {
    images[idx].style.display = "none";
    idx++
    if (idx == images.length) {
        idx = 0
    }
    images[idx].style.display = "block";
}, 3000);

var swiper = new Swiper(".mySwiper", {
    slidesPerGroup: 1,
    loop: true,
    fade: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        868: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1250: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});
const form = document.getElementById("form")
const username = document.getElementById("username")
const profession = document.getElementById("profession")
const messages = document.getElementById("messages")
const img = document.getElementById("img")
//  const cardDiv = document.querySelector(".image")
//  const image_item = document.querySelector(".image-items")
const msgArr = [
    "communication and social skills have enhanced a lot due to a range of classroom activities.",
    "Extremely happy with the kind of activities organized in school for children’s physical, social and intellectual development. Archery in School makes my child very focused and target oriented.",
    "Very happy with the school system and with the cooperative attitude of the teachers for making my child more confident to participate in theatrical activities.",
    "Teachers are very qualified and take pains.",
    "Excellent teaching methods!",
    "Different teaching and learning style is used with Interactive Digiboards which makes learning a fun for my child.",
    "The child is progressing well academically. His confidence has boosted up a lot as earlier he was very introvert.",
];
img.addEventListener("click", () => {
    let idx = Math.floor(Math.random() * msgArr.length)
    messages.value = msgArr[idx]
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

})




