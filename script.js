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

//função do efeito de swiper
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
