$(function () {

    'use strict';

    // start navbar
    $(".navbarr .fa-search ").on("click" ,function () {

        $(".navbarr .ser").toggleClass("width");
        $(".navbarr .min-nav li").fadeOut();
        $(this).fadeOut();
        $(".navbarr .fa-times ").fadeIn()


    })
    $(".navbarr .fa-times").on("click" ,function () {

        $(".navbarr .ser").toggleClass("width");
        $(".navbarr .min-nav li").fadeIn();
        $(this).fadeOut();
        $(".navbarr .fa-search ").fadeIn()


    })

    $(".navbarr .fa-bars").on("click", function () {

        if($(window).width() <= 992){

            $(".navbarr .min-nav").fadeToggle().width($(window).width()).height($(window).height())
            $(".navbarr .btnn").fadeToggle()
        }else{
            $(".navbarr .min-nav").fadeOut()

        }
        
    })

// auto function
auto()
function auto () {
    var date =new Date();
    var day = date.getDate(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sca = date.getSeconds();
    $("body .home .container .time .data .day .day2").text(day);
   $("body .home .container .time .data .day .hour").text(hour);
   $("body .home .container .time .data .day .min").text(min);
   $("body .home .container .time .data .day .sca").text(sca)
    setTimeout(auto,1000)
}
    
   


    



// scroll windows
$(window).scroll(function () {

    

    if($(window).scrollTop() > 1000){

        $(".top").fadeIn()
    }else{
        $(".top").fadeOut()
    }
  
        
        
        

    if($(window).scrollTop() > 2){
        $(".navbarr").css({
            position:"fixed",
            backgroundColor:"rgba(0,0,0,.5)"
        
        })}else{
            $(".navbarr").css({
                position:"fixed",
                backgroundColor:"transparent"})
        }

        if($(window).scrollTop() > 1000){

//start number animate


$("body .our .min-our .left .min-left .card .lead").each(function () {
    var start = $(this).data("start"),
end   = $(this).data("end");

    $(this).animate({

        start :end
    
    
    },{
    
        step : function(now,fx){
    
            $(this).text(Math.floor(now)+"+")
    
            console.log(Math.floor(5));
    
        },
        duration:5000
    
    })


})



        }

});

// scrolltop 0

$(".top").on("click", function () {

    $("html ,body").animate({

        scrollTop:0
    })
})

//scroll navbar body
$(".navbarr .min-nav li").on("click", function () {

    var scroll= $($(this).data("scroll")).offset().top-84;
    if($(window).width() <= 992){
        $(".navbarr .min-nav").fadeOut()
        $(".navbarr .btnn").fadeOut()
    }
    $("html,body").animate({

        scrollTop:scroll
    },700)

} )




//faq

$(".faq .card .card-header i ").on("click", function () {

    $($(this).data("slid")).slideToggle();
    $(this).toggleClass("act")
    console.log($($(this).data("slid")))

})











})