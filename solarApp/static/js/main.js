/*jQuery(function ($) {
    "use strict";*/
    // Author Code Here
    var ratio = 2;
    var owl = $("#owl-demo");
    // Window Load
    $(document).ready(function() {
        // Preloader
        $('.intro-tables, .parallax, header').css('opacity', '0');
        $('.preloader').addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('.preloader').hide();
            $('.parallax, header').addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $('.intro-tables').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            });
        });

        // Header Init
        if ($(window).height() > $(window).width()) {
            var ratio = $('.parallax').width() / $('.parallax').height();
            $('.parallax img').css('height', ($(window).height()) + 'px');
            $('.parallax img').css('width', $('.parallax').height() * ratio + 'px');

        }

        cuts();
        //$(window).resize(cuts);

        

        // Navbar Init
        $('nav').addClass('original').clone().insertAfter('nav').addClass('navbar-fixed-top').css('position', 'fixed').css('top', '0').css('margin-top', '0').removeClass('original');
        $('.mobile-nav ul').html($('nav .navbar-nav').html());
        $('nav.navbar-fixed-top .navbar-brand img').attr('src', $('nav.navbar-fixed-top .navbar-brand img').data("active-url"));

        // Typing Intro Init
        $(".typed").typewriter({
            delay: 50,
            speed: 100
        });

    
        // ---------------Into carousel-------------

        // carousel setup
        var owl = $("#owl-demo");
        owl.owlCarousel({
           items: 3, //10 items above 1000px browser width
            itemsDesktop: [1000, 3], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 3], // betweem 900px and 601px
            itemsTablet: [780, 2], //2 items between 600 and 0
            itemsMobile: [480, 1], // itemsMobile disabled - inherit from itemsTablet option
            navigation: false, // Show next and prev buttons
            autoPlay: 5000, //Set AutoPlay to 5 seconds
            afterInit: customPager, // custom buttons
            afterUpdate: customPager,
        });


    // Window Scroll
    function onScroll() {
        if ($(window).scrollTop() > 50) {
            $('nav.original').css('opacity', '0');
            $('nav.navbar-fixed-top').css('opacity', '1');
        } else {
            $('nav.original').css('opacity', '1');
            $('nav.navbar-fixed-top').css('opacity', '0');
        }
    }

    window.addEventListener('scroll', onScroll, false);


    // Mobile Nav
    $('body').on('click', 'nav .navbar-toggle', function () {
        event.stopPropagation();
        $('.mobile-nav').addClass('active');
    });

    $('body').on('click', '.mobile-nav a', function (event) {
        $('.mobile-nav').removeClass('active');
        if (!this.hash) return;
        event.preventDefault();
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            event.stopPropagation();
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    $('body').on('click', '.mobile-nav a.close-link', function (event) {
        $('.mobile-nav').removeClass('active');
        event.preventDefault();
    });

    $('body').on('click', 'nav.original .navbar-nav a:not([data-toggle])', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            event.stopPropagation();
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
            /*------boxes click----*/

    $('.box').on('mouseenter', function () {
        $('.box').addClass('small');
        $(this).addClass('big');
    });
    $('.box').on('mouseleave', function () {
        $('.box').removeClass('small');
        $(this).removeClass('big');
    });
    $('.box').on('click', function () {
        $('.box').removeClass('big');
        $('.box').addClass('small');
        $(this).addClass('big');
        $('.box').off('mouseenter mouseleave');
    });
    $('#system').on('click', function (e) {

        if ($(e.target).is(".box") === false) {
            $('.box').removeClass('big');
            $(".box").removeClass('small');
            $('.box').on('mouseenter mouseleave');
        }
    });
    });

    //-----------carousel custom dots-----
    function customPager() {
        //var customContainer = $('#custom-pagination-container');
        var newDots = [];
        $("#carousel-custom-dots li").each(function (i) {
            newDots.push($(this));
        });
       $.each(this.owl.userItems, function (i) {
        //$.each($('.owl-item'), function (i) {
            var paginationLinks = $('.owl-controls .owl-pagination .owl-page span');
            $(paginationLinks[i]).append(newDots[i]);
        });
    };



    

  $(window).on("resize", function () {
        // $('.modal:visible').each(centerModal);
      cuts();
        customPager();
        owl.owlCarousel();
    });






function cuts() {
    $('section .cut').each(function () {
        if ($(this).hasClass('cut-top'))
            $(this).css('border-right-width', $(this).parent().width() + "px");
        else if ($(this).hasClass('cut-top-left-white'))
            $(this).css('border-left-width', $(this).parent().width() + "px");
        else if ($(this).hasClass('cut-bottom'))
            $(this).css('border-left-width', $(this).parent().width() + "px");
    });
}

