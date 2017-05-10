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
  autoplaySpeed: 3000,
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


$('.contacts__item-title').click(function(){

  if ( $(window).width() > 425 ) { return; }

  var getN = $(this).attr('data-value-modal-number');

  $('.modal__contact-'+getN).fadeIn(300);

  $('.modal__layer').fadeIn(300);

});

function hideModalContent(n)
{
  $('.modal__contact-'+n).fadeOut(300);

  $('.modal__layer').fadeOut(300);
}

var tabs = document.querySelectorAll('.price__list .price__item a');
var contents = document.querySelectorAll('.price__content');

function changeTab(event) {

  $(".price__item .price__link").removeClass('is-active');
  event.preventDefault();
  $(this).addClass('is-active');

  for (var i=0; i<tabs.length; i++){
    tabs[i].parentNode.classList.remove('is-active');
  }
  event.target.parentNode.classList.add('is-active');
  for (var i=0; i<contents.length; i++) {
    contents[i].classList.remove('is-active');
  }
  var link = event.target.getAttribute('href');
  document.querySelector(link).classList.add('is-active');
}


for (var i=0; i<tabs.length; i++){
  tabs[i].addEventListener('click', changeTab);
}


$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body').animate({scrollTop: top}, 1500);
  });
});