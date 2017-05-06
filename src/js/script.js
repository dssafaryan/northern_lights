$(document).ready(function(){
  var toggler = document.getElementById('toggler');
toggler.addEventListener('click', mainNavVisibleToggle);
function mainNavVisibleToggle(e) {
  e.preventDefault();
  toggler.classList.toggle('toggler--close');
  document.getElementById('nav').classList.toggle('main-nav--visible');
}
});

  // script for Slider

$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2000,
});

// // Scritp for Price Section
// $('.price-tabs__link').on('click', function(event){
//   event.preventDefault();
//     $(this).toggleClass('price-tabs__link--active');

//       $('#price-finland').show();

//   });


// // Script for modal link
//   $('#contact-link').on('click', function(event) {
//     event.preventDefault();

//    $('.modal').show();

//     $('.modal__close').one('click', function() {
//       $(this).closest('.modal').hide();

//     $('.modal').on('click', function(event) {
//       if($(event.target).hasClass('modal')) {
//         $(this).closest('.modal').hide();}
//     })
//   });


  // });

