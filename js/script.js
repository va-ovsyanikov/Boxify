$(document).ready(function(){


    // активация WOW
    new WOW().init();


    // кнопка меню
    $('.header_menu  span').click(function(){
        $('.header_menu li').slideToggle(); 

    }); 


    // активация  фонового видео
    // ---------------------------------------

    if (!device.tablet() && !device.mobile()) {
        $(".player").mb_YTPlayer();
    } else {
        $("header").addClass('bgimg');
    };


    $("header").height($(window).height());

    // ---------------------------------------------



    // fancybox
    $('.portfolio_item .fancybox').fancybox({

        'padding':0,
        'cyclic':true,
        'margin':8,


        helpers: {
            title : {
                type : 'inside'
            }
        }
    });



    // fancybox видео
    $('.portfolio_item .fancybox-media').fancybox({
        'padding':0,
        'cyclic':true,
        'margin':8,
        openEffect  : 'none',
        closeEffect : 'none',
        helpers: {
            media : {},
            title : {
                type : 'inside'
            }
        }
    });

    $('.portfolio_item').imagesLoaded( function() {


        // активация isotope
        $('.portfolio_item').isotope({
            itemSelector: '.single_item',
            layoutMode: 'fitRows'
        });

        //     активация "active" кнопки, и опции isotope 
        $('.portfolio_filter li').click(function(){
            $('.portfolio_filter li').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $(".portfolio_item").isotope({
                filter: selector,
                animationOptions: {
                    duration:1000,
                    easing: 'linear',
                    queue: false,

                }

            });
            return false;

        });
    });



    // скролл по сайту
    $('.header_menu a, .top_bottom').mPageScroll2id({

    });


});
