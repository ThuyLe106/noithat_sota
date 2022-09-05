const parallax = document.getElementById("first");
window.addEventListener("scroll", function() {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.6 + "px";
})
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper(".mySwiperStar", {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var pagination = new  Swiper(".mySlider", {
  spaceBetween: 60,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});
$(document).ready(function(){
  $(window).scroll(function(event){
    var pos_body = $('html, body').scrollTop();
    if(pos_body>20){
      $('.navbar-darks' ).addClass('codinhmenu');

    }
    else{
      $('.navbar-darks').removeClass('codinhmenu');
    }
  })
});

