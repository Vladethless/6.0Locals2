/*===================================================================
    Author          : 
    Template Name   :
    Version         : 1.0
* ================================================================= */

(function ($) {
    "use strict";
    $(document).on("ready", function () {
        // SCROLL TO TOP
        var progressPath = document.querySelector(".progress-wrap path");
        var pathLength = progressPath.getTotalLength();

        progressPath.style.transition = progressPath.style.WebkitTransition = "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";

        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength) / height;
            progressPath.style.strokeDashoffset = progress;
        };

        updateProgress();
        $(window).scroll(updateProgress);

        var offset = 50;
        var duration = 550;

        jQuery(window).on("scroll", function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery(".progress-wrap").addClass("active-progress");
            } else {
                jQuery(".progress-wrap").removeClass("active-progress");
            }
        });

        jQuery(".progress-wrap").on("click", function (event) {
            event.preventDefault();
            jQuery("html, body").animate({ scrollTop: 0 }, duration);
            return false;
        });

        // MOBILE MENU
        $("#hamburger").on("click", function () {
            $(".mobile-nav").addClass("show");
            $(".overlay").addClass("active");
        });

        $(".close-nav").on("click", function () {
            $(".mobile-nav").removeClass("show");
            $(".overlay").removeClass("active");
        });

        $(".overlay").on("click", function () {
            $(".mobile-nav").removeClass("show");
            $(".overlay").removeClass("active");
        });

        $("#mobile-menu").metisMenu();


 /* Sticky Header */
    var windows = $(window);
    $(window).on('scroll', function () {
        var scrollPos = $(this).scrollTop();
        if (scrollPos > 300) {
            $('.sticky-header').addClass('is-sticky');
        } else {
            $('.sticky-header').removeClass('is-sticky');
        }
    });

        // MODAL VIDEO
        $(".modal-video-active").modalVideo({ channel: "vimeo" });

        // HERO SLIDER
        const owlPrevBtn = '<i class="fas fa-chevron-left"></i>';
        const owlNextBtn = '<i class="fas fa-chevron-right"></i>';
        $(".hero-slider-wrapper").owlCarousel({
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay: true,
            item: 1,
            nav: true,
            navText: [`${owlPrevBtn}`, `${owlNextBtn}`],
            navContainer: ".hero-wrapper .hero-slider-nav",
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                },
                600: {
                    items: 1,
                    nav: true,
                },
                1000: {
                    nav: true,
                    items: 1,
                    margin: 20,
                },
            },
        });

        // HERO SLIDER
        $(".project-details-slider").owlCarousel({
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay: true,
            item: 1,
            nav: true,
            navText: [`${owlPrevBtn}`, `${owlNextBtn}`],
            navContainer: ".project-details-slider-wrapper .project-details-slider-nav",
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                },
                600: {
                    items: 1,
                    nav: true,
                },
                1000: {
                    nav: true,
                    items: 1,
                    margin: 20,
                },
            },
        });

        // TESTIMONIAL SLIDER
        const owlPrevBtn2 = '<i class="fas fa-chevron-left"></i>';
        const owlNextBtn2 = '<i class="fas fa-chevron-right"></i>';
        $(".testimonial-slider").owlCarousel({
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay: true,
            item: 1,
            nav: true,
            navText: [`${owlPrevBtn2}`, `${owlNextBtn2}`],
            navContainer: ".testimonial-slider-wrapper .testimonial-slider-nav",
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                },
                600: {
                    items: 1,
                    nav: true,
                },
                1000: {
                    nav: true,
                    items: 1,
                },
            },
        });

        // PROJECT BRAND SLIDER
        $(".project-brand-slider").owlCarousel({
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay: true,
            nav: false,
            responsive: {
                0: {
                    items: 2,
                    margin: 20,
                },
                575: {
                    items: 3,
                    margin: 40,
                },
                767: {
                    items: 4,
                    margin: 60,
                },

                991: {
                    items: 6,
                    margin: 80,
                },

                1300: {
                    items: 6,
                    margin: 100,
                },
            },
        });

        // PROGRESS BAR
        jQuery(".skillbar").each(function () {
            jQuery(this)
                .find(".skillbar-bar")
                .animate(
                    {
                        width: jQuery(this).attr("data-percent"),
                    },
                    6000
                );
        });

        // COUNTER UP
        $(".counter-up").counterUp({
            delay: 10,
            time: 1000,
        });

        // PROGRESS CIRCLE
        $(".circlechart").circlechart();

        // IMAGE LIGHTBOX
        $(".project-details-gallery-items").magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        $(".recent-project-wrapper").magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        $(".widget-gallery").magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        $(".portfolio-gallery-wrapper .gallery-items").magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        $(".project-card-gallery").magnificPopup({
            delegate: ".card-plus-icon",
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        var catButton = ".portfolio-cat-filter button";

        $(catButton).on("click", function () {
            $(catButton).removeClass("active");
            $(this).addClass("active");
        });

        //    SEARCH BAR TOGGLE
        $(".menu-right-search").click(function () {
            $(".search-box").toggle("fast");
        });
    }); // end document ready function
})(jQuery); // End jQuery
