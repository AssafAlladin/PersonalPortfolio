const header = document.querySelector("header");
const toggle = document.querySelector(".toggle");
const navigation = document.querySelector("nav");
const resumeCard = document.getElementById('resume');
const resumeLink = document.getElementById('resume-link');
const resumeContainer = document.querySelector(".resume-container");
const exitBtn = document.querySelector('.resume-container .exit');
const cardSection = document.querySelector(".cards");
const cards = document.querySelectorAll("section.cards .card");
const slideDivs = document.querySelectorAll(".about-me div")


const cardOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
}; 

const cardObserver = new IntersectionObserver(function(entries, cardObserver) {
    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("show")
            cardObserver.unobserve(entry.target);
        }
    })

}, cardOptions)

cards.forEach(card => {
    cardObserver.observe(card);
})

const slideOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
}

const sliderObserver = new IntersectionObserver(function(entries, sliderObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
        return
        } else {
            entry.target.classList.add("slide")
            sliderObserver.unobserve(entry.target)
        }
    })
}, slideOptions)


slideDivs.forEach(div => {
    sliderObserver.observe(div)
})




toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    navigation.classList.toggle("open");
})


if (!window.location.href.includes("portfolio.html")) {
    resumeCard.addEventListener("click", openResume)
}
resumeLink.addEventListener("click", openResume)



function openResume(e) {
    e.preventDefault();
    resumeContainer.classList.add('open')
    document.body.style.overflowY = "hidden"
}
    

exitBtn.addEventListener("click", (e) => {
    resumeContainer.classList.remove("open")
    document.body.style.overflowY = "scroll"
})

// var swiper = new Swiper(".mySwiper", {
//     pagination: {
//         el: ".swiper-pagination",
//         type: "progressbar",
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });


const navList = document.querySelectorAll("nav ul li a")

navList.forEach(nav => {
    if (window.location.href == nav.href) {
        nav.parentElement.classList.add("active")
    }
})
