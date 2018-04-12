/* スライダー */
$(function () {
	var ua = navigator.userAgent;
	if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
		$('.bg-slider.sp_block').bgSwitcher({
		images: ['images/sp/mv.jpg','images/sp/mv.jpg','images/case_img03.png'],
	});
		// スマートフォン用コード
	} else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
		// タブレット用コード
	} else {
		// PC用コード
		$('.bg-slider.pc_block').bgSwitcher({
		images: ['images/mv.jpg','images/mv.jpg','images/case_img03.png'],
	});
	}
})





$(function($) {
	$('.bg-slider.pc_block').bgSwitcher({
		images: ['images/mv.jpg','images/mv.jpg','images/case_img03.png'],
	});
	/*
	$('.bg-slider.sp_block').bgSwitcher({
		images: ['images/sp/mv.jpg','images/sp/mv.jpg','images/case_img03.png'],
	});*/
});



/* スムーススクロール */
$(function(){
	$('.ftr_gotop_link').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});



$(function(){


		$('#gnav').slicknav({
			label: 'メニュー',
			 appendTo:'.hdr_wrap',

		});
		$('.slicknav_menutxt').insertAfter('.slicknav_icon');

		$(".slicknav_btn").click(function(){
			$(this).toggleClass("active");
		});
	});