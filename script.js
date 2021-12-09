let menu = document.querySelector('#menu-btn')
let navbar = document.querySelector('.header .navbar')

menu.onclick = () => {
  menu.classList.toggle('fa-times')
  navbar.classList.toggle('active')
}

// função de Remover durante o rolamento
window.onscroll = () => {
  menu.classList.remove('fa-times')
  navbar.classList.remove('active')
}

//função do efeito de swiper home
var swiper = new Swiper('.home-slider', {
  speed: 800,  //Velocidade de transição de slide
  effect: 'fade',
  grabCursor: true,
  loop:true,
  centeredSlides: true,
  autoplay: { //
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

//função do efeito de swiper - testimonials
var swiper = new Swiper('.review-slider', {
  spaceBetween: 20,
  speed: 800,  //Velocidade de transição de slide
  grabCursor: true,
  loop:true,
  autoplay: { //
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints:{
    0:{
      slidesPerView:1,
    },
    600:{
      slidesPerView:2,
    }
  }
});

// Efeito Carrousel no Blog
var swiper = new Swiper('.blogs-slider', {
  spaceBetween: 20,
  speed: 800,  //Velocidade de transição de slide
  grabCursor: true,
  loop:true,
  autoplay: { 
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints:{
    0:{
      slidesPerView:1,
    },
    600:{
      slidesPerView:2,
    },
    1200:{
      slidesPerView:3,
    },
  }
});


