var Button = document.querySelector('.nav_toggler');
var links = document.querySelector('.links');

Button.addEventListener("click",function(){
  links.classList.toggle('nav_active')
});



const swiper = new Swiper('.swiper',{
  // Optional parameter
  loop: true,
  spaceBetween:40,
  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
      delay: 2500,
      disableOnInteraction: false
  }
});
const banner = new Banner('.banner-container',{
  // Optional parameter
  //loop: true,
  spaceBetween:40,
  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
    dynamicBullets: true,
  }
});

