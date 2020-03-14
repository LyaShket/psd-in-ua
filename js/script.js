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

// ibg
$(document).ready(function(){
	let ibg = document.getElementsByClassName("ibg");
	for (let i = 0; i < ibg.length; i++) {
		let item = $(ibg[i]);
		let child = item.children("img");
		let link = child.attr("src");
		let background = item.css("background-image");
		item.css("background", `${background} 100% 100% no-repeat, url(${link}) 50% 50% no-repeat`);
		item.css("background-size", "cover");
		child.remove();
	}
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

/*
//videoplayer
$(".list__item").click(function(){
	let video = $(this).attr("data-video");
	let poster = $(this).attr("data-poster");
	let title = $(this).find(".list__title").text();
	let time = $(this).find(".list__time").text();
	$(".list__video").attr("src", "videos/" + video);
	$(".list__video").attr("poster", "images/videos/" + poster);
	$(".list__panel-title").text(title);
	$(".list__panel-time").text(time);
	if ($(this) != $(".list__item.active")) {
		$('.list__video').removeAttr("controls", "controls");
		$(".list__panel").removeClass("hidden");
	}
	$(".list__item.active").removeClass("active");
	$(this).addClass("active");
});
$(".list__left").click(function(){
	if ($(".list__panel").attr("class").search("hidden") == -1) {
		$(".list__panel").addClass("hidden");
		$('.list__video').attr("controls", "controls");
		let videoplayer = $('.list__video').get(0);
		videoplayer.paused ? videoplayer.play() : videoplayer.pause();
	}
});

//anchors
$(document).ready(function(){
    $(".header__nav,.header__logo,.menu__logo,.footer__links,.home__button-container,.places__button-container").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
			top = $(id).offset().top;
		top -= screen.width < 768 ? 58 : 0;
		$('body,html').animate({scrollTop: top}, 1500);
	});
	$(".menu__box").on("click","a", function (event) {
		event.preventDefault();
		let id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('.menu__box,.menu__button').removeClass('active');
		$('body').removeClass('lock');
		$('body,html').animate({scrollTop: top - 58}, 1500);
	})
});
*/