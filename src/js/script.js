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
  autoplay: false,
  autoplaySpeed: 2000,
});

$('.review__slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  adaptiveHeight: true,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// // Scritp for Price Section
// $('.price-tabs__link').on('click', function(event){
//   event.preventDefault();
//     $(this).toggleClass('price-tabs__link--active');

//       $('#price-finland').show();

//   });


$('.contacts__item-title').click(function(){

  var getN = $(this).attr('data-value-modal-number');

  $('.modal__contact-'+getN).fadeIn(300);

  $('.modal__layer').fadeIn(300);

});

function hideModalContent(n)
{
  $('.modal__contact-'+n).fadeOut(300);

  $('.modal__layer').fadeOut(300);
}


