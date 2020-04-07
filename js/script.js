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

// preload images for fixing animations
$(document).ready(function(){
	let images_uri = [
		"download/01_.png",
		"download/02_.png",
		"download/03_.png",
		"download/04_.png",
		"socials/01_.png",
		"socials/02_.png",
		"socials/03_.png",
		"socials/04_.png",
	]
	images_uri.forEach((uri) => {
		let img = new Image();
		img.src = "images/" + uri;
	})
});

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
