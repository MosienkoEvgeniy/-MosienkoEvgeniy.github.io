$(document).ready(function(){
	if($('.about__slider-content')) {
		$('.about__slider-content').owlCarousel({
			items: 1,
			loop: true,
			mouseDrag: false,
			animateOut: 'fadeOut',
			nav: true,
			navText: ['<div class="tresh_left">', '<div class="tresh">'],
			dots: false,
			smartSpeed: 700,
			dotsSpeed: 700,
			navSpeed: 700
		});
	}
});
$(document).ready(function () {
    $('.accordion__header').click(function () {
        $(this).parent().toggleClass('accordion__header_state_active');
        $(this).find('div.accordion__icon').toggleClass('accordion__icon_state_active');
        if ($(this).parent().hasClass('accordion__header_state_active')) {
            $(this).parent().find('div.accordion__content').toggleClass('accordion__content_state_active').slideDown(300);
        } else {
            $(this).parent().find('div.accordion__content').toggleClass('accordion__content_state_active').slideUp(300);
        }
    });

    $('.accordion__more').click(function () {
        if (!$(this).hasClass('accordion__more_state_active')) {
            $(this).parent().find('div.accordion__hidden').slideDown(300);
            $(this).addClass('accordion__more_state_active');
            $(this).text('Скрыть');
        } else {
            $(this).parent().find('div.accordion__hidden').slideUp(300);
            $(this).removeClass('accordion__more_state_active');
            $(this).text('Показать больше');
        }
    });
});
$(document).ready(function($) {
	$('.catalog__switch').selectize({
		// sortField: 'text'
	});
});
$(document).ready(function($) {
	var popupSlider = $('.pop-up__slider').owlCarousel({
		items: 1,
		dots: false,
		smartSpeed: 400,
		nav: true,
		margin: 30,
		navText: ['<img src="/img/pop-up-arrow-left.png">', '<img src="/img/pop-up-arrow-right.png">'],
	});

	popupSlider.on('changed.owl.carousel', function(event) {
		$('.pop-up__counter-first').text(event.item.index + 1);
	});

	$('.pop-up__counter-last').text($('.pop-up__slider-item').length);

	$('.cart-porfolio__content-mobile-slider').owlCarousel({
		items: 1,
		dots: false,
		smartSpeed: 400,
		margin: 30,
		nav: true,
		navText: ['<img src="/img/pop-up-arrow-left.png">', '<img src="/img/pop-up-arrow-right.png">']
	});
});
$(document).ready(function () {
    $('.rate__slider').owlCarousel({
        items: 3,
        mouseDrag: false,
        touchDrag: true,
        nav: false,
        responsive : {
            0 : {
                items: 1,
                dots: true,
            },
            992 : {
                items: 1,
                dots: true,
            },
            1340 : {
                items: 3,
            }
        }
    });
});