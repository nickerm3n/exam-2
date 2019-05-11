'use strict';

(function($){
	$(document).ready(function() {
		// Code
		$('.bouncy-gallery').isotope({

			itemSelector: '.bouncy-gallery__item',
			masonry: {
				gutter: 5
			}
		})

		$('.bouncy-portfolio__filter').click(function(){
			$('.bouncy-portfolio__filter').removeClass('active');
			$(this).addClass('active');

			$('.bouncy-gallery').isotope({
				filter: $(this).attr('data-filter')
			});

		});

		$('.bouncy-slider__wrapper').slick({
     arrows: false,
     dots: true
   });

		$('.bouncy-testimonials__slider-wrapper').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
     arrows: false,
     dots: true
   });

	});


})(jQuery);

function initMap() {
 var center = {lat: 49.568678, lng: 34.585731},
 map  = new google.maps.Map(document.getElementById('map'), {
  zoom: 15, 
  center: center,
  disableDefaultUI: true,
  zoomControl: true
}),
 marker = new google.maps.Marker({
  title: 'Beetroot',
  position: {lat: 49.568678, lng: 34.585731},
  icon: 'images/marker.png',
  map: map
}),
 infowindow =new google.maps.InfoWindow;

 google.maps.event.addListener(marker, 'click', (function(marker) {
   var info = '<div class="window">'+'<h1 class="window__title">' +marker.title+'</h1>'+'<p>'+'Welcome to Beetroot'+'</p>'+'</div>';
   return function() {
     infowindow.setContent(info);
     infowindow.open(map, marker);
   }})(marker));
};
google.maps.event.addDomListener(window, 'load', initMap);     
