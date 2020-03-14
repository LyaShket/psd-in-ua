"use strict";

// update function when user uses smartphone
function update() {
	if($(".wrapper").width() > 767) {
		let $homeNextArrow = $(".home__slider .slick-next.slick-arrow");
		let homeNextArrowLeft = 226;
		homeNextArrowLeft += $(".home__slider .slick-dots").width();
		$homeNextArrow.css("left", `${homeNextArrowLeft}px`);
	}
	else {
		let $homeNextArrow = $(".home__slider .slick-next.slick-arrow");
		$homeNextArrow.removeAttr("style");
	}
}

// sliders
$(document).ready(function(){
    $('.home__slider').slick({
        slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		adaptiveHeight: true,
	});
	$('.make__slider').slick({
        slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		adaptiveHeight: true,
	});
});

$(document).ready(update);
$(window).resize(update);

//anchors
$(document).ready(function(){
    $(".home,.about,.footer").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href');
		if (id != "#") {
			let top = $(id).offset().top;
			top -= screen.width < 768 ? 58 : 0;
			$('body,html').animate({scrollTop: top}, 1250);
		}
	});
});
