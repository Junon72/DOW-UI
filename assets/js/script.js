$(document).ready(function () {
	// Navigation
	window.onscroll = function () {
		myFunction()
	};

	var header = document.getElementById("dowHeader");
	var sticky = header.offsetTop;

	function myFunction() {
		if (window.pageYOffset > sticky) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		};
	};

	// Tooltips
	$(function () {
		$('[data-tooltip="tooltip"]').tooltip()
	});

	//Sales Carousel - Slick
	$('.responsive').slick({
		dots: true,
		infinite: true,
		speed: 300,
		nextArrow: $('.next'),
		prevArrow: $('.prev'),
		mobileFirst: true,
		responsive: [{

				breakpoint: 1400,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 1020,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
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

	// Highlight Carousel - Bootstrap4

	$('.carousel').carousel()


	// Comment section

	$('#commentsToggle').click(function() {
		$('#commentSection').toggleClass('hidden')
	})
});