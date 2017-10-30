$(document).ready(function () {

    // HOME PAGE SLIDER
    $('.slider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        selector: ".slider-container > .slider-item",
        useCSS: false,
        start: function (slider) {
            var curSlide = slider.slides[slider.currentSlide],
                curSlideHeading = $(curSlide).find('.slider-text h2, .slider-text p, .slider-text a');

            TweenMax.staggerTo(curSlideHeading, 1.5, {
                css: {className: "+=done"},
                delay: 0.4,
                ease: Back.easeOut.config(1.4)
            }, 0.2);
        },
        after: function (slider) {
            var curSlide = slider.slides[slider.currentSlide],
                notCurHeading = $('.slider-item').find('.slider-text h2, .slider-text p, .slider-text a'),
                curSlideHeading = $(curSlide).find('.slider-text h2, .slider-text p, .slider-text a');

            TweenMax.to(notCurHeading, 0.2, {css: {className: "-=done"}});

            TweenMax.staggerTo(curSlideHeading, 1.5, {
                css: {className: "+=done"},
                delay: 0.4,
                ease: Back.easeOut.config(1.4)
            }, 0.2);
        }
    });

    //SINGE SLIDER
    $('.gallery-slider').flexslider({
        directionNav: false,
        controlNav: false,
        selector: ".slider-container > .gallery-item",
        animation: "slide",
        animationLoop: false,
        slideshow: false,
        sync: ".single-carousel"
    });

    // GALLERY CAROUSEL

    $('.gallery-carousel').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: true,
        animationLoop: false,
        slideshow: false,
        itemWidth: 154,
        itemMargin: 20,
        asNavFor: '.gallery-slider',
        maxItems: 5,
        minItems: 2,
        selector: ".carousel-content > .carousel-item"
    });


    // CAROUSEL
    $('.carousel-slider').flexslider({
        directionNav: true,
        controlNav: false,
        selector: ".slider-container > .news-slider-item",
        animation: "slide",
        animationLoop: false,
        slideshow: false,
        minItems: getGridSize(), // use function to pull in initial value
        maxItems: getGridSize(), // use function to pull in initial value
        itemWidth: 422,
        itemMargin: 28
    });


    // CUSTOM SELECT BOX
    $('select').select2({
        minimumResultsForSearch: Infinity,
        allowClear: true
    });

    // HEADER NAVIGATION
    $('[class*="current-"]').click(function () {
        var element = $(this).parent().find('ul');

        TweenMax.to(element, 0.1, {visibility: 'visible'});
        TweenMax.to(element, 0.6, {css: {className: "+=done"}, ease: Back.easeOut.config(0.5)});
        $(this).addClass('open');
    });

    $(document).mouseup(function (e) {
        var container = $('[class*="current-"].open');
        var element = container.parent().find('ul');

        if (!container.is(e.target)
            && container.has(e.target).length === 0) {
            TweenMax.to(element, 0.1, {visibility: 'hidden'});
            TweenMax.to(element, 0.6, {css: {className: "-=done"}, ease: Back.easeOut.config(0.5)});
            container.removeClass('open');
        }
    });

    // MOBILE MENU

    var menuTl = new TimelineMax(); // menu animation

    menuTl.to('.main', 0.6, {css: {className: "+=done"}, ease: Back.easeOut.config(0.5)});

    menuTl.pause();

    // open menu
    $('.menu-btn').click(function () {
        $(this).toggleClass('open');
        if ($(this).hasClass('open')) {
            menuTl.play();
        }
        else {
            menuTl.reverse();
        }
    });

    // ACCORDIONS
    $('.open-accordion').click(function (e) {
        e.preventDefault();
        $(this).closest('.middle-accordion').find('.content-accordion').delay(100).slideToggle();
        $(this).toggleClass('active');
        $('.open-accordion').not(this).removeClass('active').closest('.middle-accordion').find('.content-accordion').slideUp();
    });


    // SCROLL TO TOP
    if ($(window).width() < 640) {
        $(window).scroll(function () {
            ($(this).scrollTop() > 150) ? $('.btn-top').addClass('is-visible') : $('.btn-top').removeClass('is-visible');
        });
        $('.btn-top').click(function (event) {
            event.preventDefault();
            $('body,html').animate({scrollTop: 0}, 700);
        });
    }

    // FORM VALIDATION
    $('form').each(function () {
        $(this).validate({
            ignore: ''
        });
    });

    // CUSTOM FILE UPLOAD
    $('input[type="file"]').customFile();


    // FIXED HEADER
    if ($(window).width() > 1180) {
        $(window).scroll(function () {
            ($(this).scrollTop() > 122) ? $('header').addClass('fixed') : $('header').removeClass('fixed');
        });
    }

    // SWIPE BOX
    $('.swipebox').swipebox();

    // RESPONSIVE TABLE
    $('table').stackcolumns();

});

// ------------ DOCUMENT LOAD -------------
$(window).load(function () {

    //PARALLAX
    if ($(window).width() > 1024) {
        setTimeout(function () {
            $(window).stellar({horizontalScrolling: false});
        }, 500);
    }

    // ADD CLASS TO GALLERY VIDEO ITEMS
    $('.gallery-item video').each(function () {
        $(this).parent().addClass('no-icon');

    });
});


// ------------ WINDOW RESIZE -------------
$(window).resize(function () {

    // check grid size on resize event
    var gridSize = getGridSize();

    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
});


// ------------ FUNCTIONS -------------

// store the slider in a local variable
var flexslider = {vars: {}};

// tiny helper function to add breakpoints
function getGridSize() {
    return (window.innerWidth < 600) ? 1 :
        (window.innerWidth < 900) ? 2 : 3;
}

//Get tallest element height
function sameHeight(b) {
    heights = b.map(function () {
        return $(this).outerHeight();
    }).get(),
        maxHeight = Math.max.apply(null, heights);

    b.css("min-height", maxHeight);
}

// Check if element is in viewport
$.fn.isInViewport = function (offset) {
    var elementTop = $(this).offset().top,
        top = offset || 0,
        elementBottom = elementTop + $(this).outerHeight(),
        viewportTop = $(window).scrollTop(),
        viewportBottom = viewportTop + $(window).height();

    return elementBottom > (viewportTop + top) && elementTop < viewportBottom;
};

// CHECK IF IS IE
function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}
