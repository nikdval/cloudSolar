jQuery(function ($) {
    "use strict";
    // Author Code Here

    var owlPricing;
    var ratio = 2;
    var owl = $("#owl-demo");
    // Window Load
    $(window).load(function () {
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

        //		$('header').height($(window).height() * 0.6); //header height

        cuts();
        $(window).resize(cuts);

        // ---------------Into carousel-------------

        // carousel setup
        owl.owlCarousel({
            items: 3, //10 items above 1000px browser width
            itemsDesktop: [1000, 3], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 3], // betweem 900px and 601px
            itemsTablet: [780, 2], //2 items between 600 and 0
            itemsMobile: [480, 1], // itemsMobile disabled - inherit from itemsTablet option
            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            afterInit: customPager, // custom buttons
            afterUpdate: customPager,
        });
        // owlres();
        /*$('.owl-page').click( function() {
           
    var activeImg =$('.owl-page active span li');
        var title = activeImg.attr('title');
        console.log(activeImg);
        $('.intro-title').html('<h2>' + title + '</h2>');
    
});*/

        // Navbar Init
        $('nav').addClass('original').clone().insertAfter('nav').addClass('navbar-fixed-top').css('position', 'fixed').css('top', '0').css('margin-top', '0').removeClass('original');
        $('.mobile-nav ul').html($('nav .navbar-nav').html());
        $('nav.navbar-fixed-top .navbar-brand img').attr('src', $('nav.navbar-fixed-top .navbar-brand img').data("active-url"));

        // Typing Intro Init
        $(".typed").typewriter({
            delay: 50,
            speed: 100
        });

        // Popup Form Init
        var i = 0;
        var interval = 0.15;
        $('.popup-form .dropdown-menu li').each(function () {
            $(this).css('animation-delay', i + "s");
            i += interval;
        });
        $('.popup-form .dropdown-menu li a').click(function (event) {
            event.preventDefault();
            $(this).parent().parent().prev('button').html($(this).html());
        });

        // Onepage Nav
        $('.navbar.navbar-fixed-top .navbar-nav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 400,
            filter: ':not(.btn)'
        });

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

    // Window Resize
    /*$(window).resize(function() {
    	$('header').height($(window).height());
    });*/

    // Pricing Box Click Event
    $('.moving-box .box-main').click(function () {
        $('.moving-box .box-main').removeClass('active');
        $('.moving-box .box-second').removeClass('active');
        $(this).addClass('active');
        $(this).next($('.box-second')).addClass('active');
        $('#system').css("background-image", "url(" + $(this).data('img') + ")");
        $('#system').css("background-size", "cover");
    });

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



    /*function centerModal() {
        $(this).css('display', 'block');
        var $dialog = $(this).find(".modal-dialog"),
            offset = ($(window).height() - $dialog.height()) / 2,
            bottomMargin = parseInt($dialog.css('marginBottom'), 10);

        // Make sure you don't hide the top part of the modal w/ a negative margin
        // if it's longer than the screen height, and keep the margin equal to 
        // the bottom margin of the modal
        if (offset < bottomMargin) offset = bottomMargin;
        $dialog.css("margin-top", offset);
    }*/

    /*$('.modal').on('show.bs.modal', centerModal);

    $('.modal-popup .close-link').click(function (event) {
        event.preventDefault();
        $('#modal1').modal('hide');
    });*/

    $(window).on("resize", function () {
        // $('.modal:visible').each(centerModal);
        customPager();

    });
    /*------boxes click----*/
   
   /* $('.box').on('mouseenter', function () {
            $('.box').addClass('small');
            $(this).removeClass('small');
            $(this).addClass('big'); 
    });
    $('.box').on('mouseleave', function () {
        setTimeout(function () {
            $('.box').removeClass('small');
            $('.box').removeClass('big');
        }, 3000);
    });
   /* $('.box').on('click', function () {
        $('.box').toggleClass('small');
        $(this).removeClass('small');
        $(this).toggleClass('big');
        //$('.box').off('mouseenter mouseleave');
    });
    $('#system').on('click', function (e) {
        if ($(e.target).is(".box") === false) {
            $('.box').removeClass('big');
            $(".box").removeClass('small');
            //            $('.box').on('mouseenter mouseleave');
        }
    
    });*/


});


function cuts() {
    console.log('yeeee');
    $('section .cut').each(function () {
        if ($(this).hasClass('cut-top'))
            $(this).css('border-right-width', $(this).parent().width() + "px");
        else if ($(this).hasClass('cut-top-left-white'))
            $(this).css('border-left-width', $(this).parent().width() + "px");
        else if ($(this).hasClass('cut-bottom'))
            $(this).css('border-left-width', $(this).parent().width() + "px");
    });
}


/*------boxes click----*/
function boxMove(box) {
    $(box).on('mouseenter', function () {
        $('.box').removeClass('big');
        $(".box").addClass('small');
        $(this).addClass('big');
    });
    $(box).on('mouseleave', function () {
        $('.box').removeClass('big');
        $(".box").removeClass('small');
    });

    $(box).on('click', function () {
        $('.box').removeClass('big');
        $(".box").addClass('small');
        $(box).addClass('big');
        $('.box').off('mouseenter mouseleave');
        alert("move");
    });
}