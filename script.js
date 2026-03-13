console.log("JS connected");

// SIDEBAR MENU TOGGLE
function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

// LOGIN FORM
let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let closeLogin = document.querySelector('#close-login-form');

loginBtn.onclick = () => {
  loginForm.classList.add('active');
}

closeLogin.onclick = () => {
  loginForm.classList.remove('active');
}


// CLOSE MENU & LOGIN ON SCROLL
window.onscroll = () => {

  document.getElementById("sidebar").classList.remove("active");
  loginForm.classList.remove('active');

  // PARALLAX EFFECT
  document.querySelectorAll('.home-parallax').forEach(elm => {

    let speed = elm.getAttribute('data-speed');

    elm.style.transform = `translateY(${window.scrollY * speed / 100}px)`;

  });

};


// SWIPER VEHICLES SLIDER
var swiper = new Swiper(".vehicles-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides: true,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    991: { slidesPerView: 3 }
  }

});


// FEATURED CARS SLIDER
var swiper = new Swiper(".featured-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop:true,
  autoplay:{
    delay: 9500,
    disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});


// REVIEW SLIDER
var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop:true,
  autoplay:{
    delay: 9500,
    disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
