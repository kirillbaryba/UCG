(function(){

    var header_height = $('header').height();
    var header = $('header');



    function scrollTop(header_height){
        $('html, body').animate({
            scrollTop: $("#how-it-works").offset().top - header_height
        }, 500);
    }


    $(window).on('resize', function(){

    });


    $('.scrolldown a').click(function(){
        scrollTop(header_height);
        return false;
    });

})();