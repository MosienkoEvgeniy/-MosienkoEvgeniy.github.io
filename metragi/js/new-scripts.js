function banners(){

    var bannerWidth = ($(window).width() - 1362) / 2,

        distance = (bannerWidth - 500);



    if ( bannerWidth < 220 ) {

        $('.banners__left, .banners__right').css({

            'display': 'none'

        });

    }

    else if ( bannerWidth > 500 ) {

        if ( distance >= 0 ) {

            $('.banners__left').css({

                'display': 'flex',

                'width': 500,

                'opacity': 1,

                'left': distance

            });

            $('.banners__right').css({

                'display': 'flex',

                'width': 500,

                'opacity': 1,

                'right': distance

            });

        }

    }

    else {

        $('.banners__left').css({

            'display': 'flex',

            'width': bannerWidth,

            'opacity': 1,

            'left': 0

        });

        $('.banners__right').css({

            'display': 'flex',

            'width': bannerWidth,

            'opacity': 1,

            'right': 0

        });

    }

}

function menuShow(){

    if ($(window).width() <= 860 && $('.menu-button').hasClass('active')) {

        $('.header__menu').removeClass('show');

        $('.header__menu--mobile').addClass('show');

    }

    if ($(window).width() >= 861 && $('.menu-button').hasClass('active')) {

        $('.header__menu').addClass('show');

        $('.header__menu--mobile').removeClass('show');

    }

}

$(document).ready(function () {

    banners();

    menuShow();

    var $slider = $('.slider__inner');

    $slider.slick({

        autoplay: !1,

        autoplaySpeed: 5000,

        speed: 1000,

        fade: !1,

        arrows: !0,

        dots: !0,

        prevArrow: '<div class="slider__arrow slider__prev animated"></div>',

        nextArrow: '<div class="slider__arrow slider__next animated"></div>',

        appendArrows: '.slider__arrows',

        dotsClass: 'slider__dots flex-new',

        draggable: !0,

        swipe: !0,

        touchMove: !0,

        slidesToShow: 1,

        slidesToScroll: 1,

        infinite: !1

    });

    var length = $('.slider__dots li').length;

    if (length === 1){

        $slider.addClass('one-slide');

    }



    var $team = $('.team__inner');

    $team.slick({

        autoplay: !1,

        autoplaySpeed: 5000,

        speed: 1000,

        fade: !1,

        arrows: !0,

        dots: !0,

        appendArrows: '.team__arrows',

        dotsClass: 'team__dots',

        draggable: !0,

        swipe: !0,

        touchMove: !0,

        slidesToShow: 1,

        slidesToScroll: 1,

        infinite: !1

    });

    var length2 = $('.team__inner li').length;

    if (length2 === 1){

        $team.addClass('one-slide');

    }

    $('#phone-mask').mask("7 (999) 999-9999");

    Inputmask("9{1,10}", {

        positionCaretOnClick: "radixFocus",

        _radixDance: true,

        numericInput: false,

        placeholder: "",

        definitions: {

            "0": {

                validator: "[0-9\uFF11-\uFF19]"

            }

        }

    });
    $('#tel').mask("7 (999) 999-9999");

    Inputmask("9{1,10}", {

        positionCaretOnClick: "radixFocus",

        _radixDance: true,

        numericInput: false,

        placeholder: "",

        definitions: {

            "0": {

                validator: "[0-9\uFF11-\uFF19]"

            }

        }

    });
    $('#phone').mask("7 (999) 999-9999");

    Inputmask("9{1,10}", {

        positionCaretOnClick: "radixFocus",

        _radixDance: true,

        numericInput: false,

        placeholder: "",

        definitions: {

            "0": {

                validator: "[0-9\uFF11-\uFF19]"

            }

        }

    });
    $('.phone-field').mask("7 (999) 999-9999");

    Inputmask("9{1,10}", {

        positionCaretOnClick: "radixFocus",

        _radixDance: true,

        numericInput: false,

        placeholder: "",

        definitions: {

            "0": {

                validator: "[0-9\uFF11-\uFF19]"

            }

        }

    }).mask('#calculator-input-1');

    Inputmask("9{1,2}.99", {

        positionCaretOnClick: "radixFocus",

        _radixDance: true,

        numericInput: false,

        placeholder: "",

        definitions: {

            "0": {

                validator: "[0-9\uFF11-\uFF19]"

            }

        }

    }).mask('#calculator-input-2');

    Inputmask("9{1,4}", {

        positionCaretOnClick: "radixFocus",

        radixPoint: ".",

        _radixDance: false,

        numericInput: false,

        placeholder: "",

        definitions: {

            "0": {

                validator: "[0-9\uFF11-\uFF19]"

            }

        }

    }).mask('#calculator-input-3');



    $('.menu-button').click(function () {

        if ($(window).width() > 860) {

            if (!$(this).hasClass('active')){

                $(this).addClass('active');

                $('.header__inner').addClass('active');

                $('.header__menu').addClass('show');

            }

            else{

                $(this).removeClass('active');

                $('.header__inner').removeClass('active');

                $('.header__menu').removeClass('show');

            }

        }

        else {

            if (!$(this).hasClass('active')){

                $(this).addClass('active');

                $('.header__inner').addClass('active');

                $('.header__menu--mobile').addClass('show');

            }

            else{

                $(this).removeClass('active');

                $('.header__inner').removeClass('active');

                $('.header__menu--mobile').removeClass('show');

            }

        }

    });



    var $headerMenuCaro = $('.header__menu--caro');

    $headerMenuCaro.slick({

        autoplay: !0,

        autoplaySpeed: 5000,

        speed: 1000,

        arrows: !1,

        fade: !1,

        dots: !0,

        dotsClass: 'header__menu--caro-dots flex-new',

        draggable: !0,

        swipe: !0,

        touchMove: !0,

        slidesToShow: 3,

        slidesToScroll: 3,

        infinite: !0,

        responsive: [

            {

                breakpoint: 641,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 2,

                }

            },

            {

                breakpoint: 481,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                }

            }

        ]

    });



    $('.tabs__list').on('click', '.tabs__list--item:not(.current)', function() {

        $(this).addClass('current').siblings().removeClass('current').parents('.tabs__box').find('.tabs__content').eq($(this).index()).fadeIn(250).siblings('.tabs__content').hide();



        $headerMenuCaro.slick('unslick');

        $headerMenuCaro.slick({

            autoplay: !0,

            autoplaySpeed: 5000,

            speed: 1000,

            arrows: !1,

            fade: !1,

            dots: !0,

            dotsClass: 'header__menu--caro-dots flex-new',

            draggable: !0,

            swipe: !0,

            touchMove: !0,

            slidesToShow: 3,

            slidesToScroll: 3,

            infinite: !0,

            responsive: [

                {

                    breakpoint: 641,

                    settings: {

                        slidesToShow: 2,

                        slidesToScroll: 2,

                    }

                },

                {

                    breakpoint: 481,

                    settings: {

                        slidesToShow: 1,

                        slidesToScroll: 1,

                    }

                }

            ]

        });

    });



    $('.banners__checkbox--label').click(function (){

        !$(this).hasClass('disabled') && $(this).toggleClass('checked');

    });

    $('.banners__checkbox--input[checked]').next().addClass('checked');

    $('.banners__checkbox--input[disabled]').next().addClass('disabled');



    $('.contacts__checkbox--label').click(function (){

        !$(this).hasClass('disabled') && $(this).toggleClass('checked');

    });

    $('.contacts__checkbox--input[checked]').next().addClass('checked');

    $('.contacts__checkbox--input[disabled]').next().addClass('disabled');



    // Calculator

    var $calInput = $('.calculator__input'),

        $calcError = $('.calculator__error'),

        $calcInfo = $('.calculator__info'),

        $calcResult = $('.calculator__result');



    $('.calculator__submit').click(function () {

        var calInputSumm = parseFloat($('#calculator-input-1').val()),

            calInputAnnualInterestRate = parseFloat($('#calculator-input-2').val()),

            calInputRepaymentTime = parseFloat($('#calculator-input-3').val()),

            calcCount = $calInput.length,

            calcI = (calInputAnnualInterestRate/12)/100,

            calcResult = 0;



        $calInput.each(function () {

            if ($(this).val() === '') {

                $(this).addClass('is--error');

                $calcError.removeClass('hidden-new');

            }

            else {

                $(this).removeClass('is--error');

                $calcError.addClass('hidden-new');

            }

            if (!$(this).hasClass('is--error')) calcCount--;

        });



        if (calcCount === 0){

            calcResult = calInputSumm * ((calcI * Math.pow((1 + calcI),calInputRepaymentTime)) / (Math.pow((1 + calcI),calInputRepaymentTime) - 1));

            $calcResult.text(calcResult.toFixed(2));

            $calcInfo.removeClass('hidden-new');

        }

        else{

            $calcResult.text('');

            $calcInfo.addClass('hidden-new');

        }

    });

    $('.calculator__reset').click(function () {

        $calInput.val('').removeClass('is--error');

        $calcError.addClass('hidden-new');

        $calcInfo.addClass('hidden-new');

        $calcResult.text('');

    });



    // Adaptive table

    $('table').each(function () {

        var $thisBodyTr = $('tbody tr', this),

            $thisTh = $('th', this) ;

        if ( !$(this).hasClass('overlay-layout')) {

            for (var itr = 0; itr <= $thisBodyTr.length; itr++){

                for (var i = 0; i <= $thisTh.length; i++) {

                    $('td', $('tr', this).eq(itr)).eq(i).attr('data-label', $thisTh.eq(i).text())

                }

            }

        }

    });



    // Reviews

    var $reviews = $('.reviews__slider');

    $reviews.slick({

        autoplay: !1,

        autoplaySpeed: 5000,

        speed: 1000,

        fade: !0,

        arrows: !0,

        prevArrow: '<div class="reviews__arrow reviews__prev animated"></div>',

        nextArrow: '<div class="reviews__arrow reviews__next animated"></div>',

        dots: !1,

        dotsClass: 'reviews__dots flex-new animated',

        draggable: !0,

        swipe: !0,

        touchMove: !0,

        slidesToShow: 1,

        slidesToScroll: 1,

        infinite: !0

    });



    // Left Banner Form

    $('.banners__submit-button').click(function () {

        var $bName = $('.banners__name'),

            $bPhone = $('.banners__phone');



        if ($bName.val() === '') {

            $bName.addClass('is--error').next().removeClass('hidden-new');

        }

        else {

            $bName.removeClass('is--error').next().addClass('hidden-new');

        }



        if ($bPhone.val() === '') {

            $bPhone.addClass('is--error').next().removeClass('hidden-new');

        }

        else {

            $bPhone.removeClass('is--error').next().addClass('hidden-new');

        }



        if (!$('.banners__checkbox--input').is(':checked')) {

            $('.banners__checkbox .banners__error').removeClass('hidden-new');

        }

        else {

            $('.banners__checkbox .banners__error').addClass('hidden-new');

        }



        if ($bName.val() != '' && $bPhone.val() != '' && $('.banners__checkbox--input').is(':checked')) {

            $.post(

                '/sendmailforms/save_phone0.php',

                {

                    name: $bName.val(),

                    phone: $bPhone.val()

                },

                function() {

                    $('.remove-item').remove();

                    $('.banners__title').text('Спасибо!');

                    $('.banners__sub-title').text('Ваша заявка уже доставлена. Мы свяжемся с Вами в ближайшее время.');

                    yaCounter30203659.reachGoal('question');

                }

            );

        }



    });



    // Contacts bottom form

    $('.contacts__form--submit').click(function () {

        var $qName = $('input[name="q-name"]'),

            $qMail = $('input[name="q-email"]'),

            $qText = $('textarea[name="q-text"]');



        if ($qName.val() === '') {

            $qName.addClass('is--error').next().removeClass('hidden-new');

        }

        else {

            $qName.removeClass('is--error').next().addClass('hidden-new');

        }



        if ($qMail.val() === '') {

            $qMail.addClass('is--error').next().removeClass('hidden-new');

        }

        else {

            $qMail.removeClass('is--error').next().addClass('hidden-new');

        }



        if ($qText.val() === '') {

            $qText.addClass('is--error').next().removeClass('hidden-new');

        }

        else {

            $qText.removeClass('is--error').next().addClass('hidden-new');

        }



        if (!$('.contacts__checkbox--input').is(':checked')) {

            $('.contacts__checkbox .contacts__error').removeClass('hidden-new');

        }

        else {

            $('.contacts__checkbox .contacts__error').addClass('hidden-new');

        }



        if ($qName.val() != '' && $qMail.val() != '' && $qText.val() != '' && $('.contacts__checkbox--input').is(':checked')) {

            console.log(0);

            $.post(

                '/sendmailforms/save_phone1.php',

                {

                    name: $qName.val(),

                    email: $qMail.val(),

                    text: $qText.val()

                },

                function() {

                    console.log(1);

                    $('.remove-item').remove();

                    $('.contacts__main-title').text('Спасибо!');

                    $('.contacts__form--sub-title').text('Ваша заявка уже доставлена. Мы свяжемся с Вами в ближайшее время.');

                    yaCounter30203659.reachGoal('question');

                }

            );

        }

    });

});

$(window).resize(function () {

    banners();

    menuShow();

});

// OLD SCRIPTS

$(document).ready(function () {

    $('.rate__arrow').click(function () {

        $(this).closest('.rate__content').toggleClass('active');

    });

});

$('.inline-popup').magnificPopup({

    removalDelay: 500,

    callbacks: {

        beforeOpen: function() {

            this.st.mainClass = this.st.el.attr('data-effect');

        }

    },

    midClick: true

});

$('.left').magnificPopup({

    removalDelay: 500,

    callbacks: {

        beforeOpen: function() {

            this.st.mainClass = this.st.el.attr('data-effect');

        }

    },

    midClick: true

});