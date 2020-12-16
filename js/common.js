$('.offer-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  dots: true,
  speed: 1500,
});

$(document).ready(function(){
	$('.burger-menu').click(function(){
		$('.adaptive-menu').toggleClass('adaptive-menu-active');
	})
});

document.body.onload = function() {

    setTimeout(function() {
    var preloader = document.getElementById('preloader');
    if(!preloader.classList.contains('done') ) {
    preloader.classList.add('done');
    body.classList.add('lock');
    }
    }, 1000);
 }