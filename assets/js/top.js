$(function(){
	var mainSwiper = new Swiper('.swiper-container', {
		effect: 'fade',
		speed: 400, 
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next', 
			prevEl: '.swiper-button-prev', 
		}, 
		autoplay: {
			delay: 5000,
		},
		on: {
			init: function(){
				$('.main_visual').addClass('slider_on_init');
			},
			slideChangeTransitionStart: function(){
				var idx = this.realIndex;
				var className;
				$('.main_visual').attr('data-miraito-slide-index', idx+1);
			}
		}
	});
	mainSwiper.autoplay.start();
});