$(document).ready(function(){

// create port main variable
    var mixer =  mixitup('.port-main');

    $('.port-list ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        });

        // $('.port-list ul li').on('click', function(){
        //     $('.port-item img').css({
        //         position:'absolute',
        //         top:'0px',
        //         left:'800px',
        //     });



        //     $('.port-item img').mouseOver(function() {
        //         $('.port-item .mix .overlay').css({
        //             position:'absolute',
        //             top:'0px',
        //             left:'1000px',
        //         });
            
        //     });
        // });

// scroll function for nav
        $(window).scroll(function(){
            var scrolling = $(this).scrollTop();
            if(scrolling > 30){
                $('nav').addClass('nav-fix');
            }else{
                $('nav').removeClass('nav-fix');  
            }

// scroll function for top-to-bot
            var scrolling = $(this).scrollTop();
            if(scrolling > 30){
                $('.top-to-bot').fadeIn('.top-to-bot');
            }else{
                $('.top-to-bot').fadeOut('.top-to-bot');  
            }
         

// top-to-bot
            $('.top-to-bot').click(function(){
                $('html, body').animate({
                    scrollTop:'0px',
                },1500);
            });

        }); 
        
          

});