$(function() {
    "use strict";




    /* ==========================================================================
   Preload
   ========================================================================== */

    // $(window).load(function() {
    //
    //     $("#status").fadeOut();
    //
    //     $("#preloader").fadeOut("slow");
    // });


    /* ==========================================================================
   parallax scrolling
   ========================================================================== */



		if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        		if($(window).width()>992){skrollr.init({forceHeight:false})}$(window).on("resize",function(){if($(window).width()<=	992){skrollr.init().destroy()}});$(window).on("resize",function(){if($(window).width()>992){skrollr.init({forceHeight:false})}});
    }






 // /* ==========================================================================
 //       Number animation
 //       ========================================================================== */
 //
 //
 //    $('.counter').waypoint(function() {
 //
 //        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
 //
 //        $('.total-number-1').animateNumber({
 //            number: 100, //change value here
 //            numberStep: comma_separator_number_step
 //        }, 2000);
 //
 //        $('.total-number-2').animateNumber({
 //            number: 1000, //change value here
 //            numberStep: comma_separator_number_step
 //        }, 2000);
 //
 //        $('.total-number-3').animateNumber({
 //            number: 1200, //change value here
 //            numberStep: comma_separator_number_step
 //        }, 2000);
 //
 //        $('.total-number-4').animateNumber({
 //            number: 1500, //change value here
 //            numberStep: comma_separator_number_step
 //        }, 2000);
 //
 //
 //
 //    }, {
 //        offset: '80%'
 //
 //    });
 //
 //
 //    /* ==========================================================================
 //   Tweet
 //   ========================================================================== */
 //
 //
 //    $('.tweet').twittie({
 //        username: 'jwo', // change username here
 //        dateFormat: '%b. %d, %Y',
 //        template: '{{tweet}}',
 //        count: 10
 //    }, function() {
 //        var item = $('.tweet ul');
 //
 //        item.children('li').first().show().siblings().hide();
 //        setInterval(function() {
 //            item.find('li:visible').fadeOut(500, function() {
 //                $(this).appendTo(item);
 //                item.children('li').first().fadeIn(500);
 //            });
 //        }, 5000);
 //    });


    /* ==========================================================================
   Smooth Scroll
   ========================================================================== */

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
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



    /* ==========================================================================
   Review slider
   ========================================================================== */

    $('.review-slider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false
    });

    /* ==========================================================================
   ScrollTop Button
   ========================================================================== */


    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.scroll-top a').fadeIn(200);
        } else {
            $('.scroll-top a').fadeOut(200);
        }
    });


    $('.scroll-top a').click(function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });


});
