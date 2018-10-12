$(function () {
    $('body').on('click', '[data-toggle]', function(e){
        ele = $(this);
        ele.toggleClass('on');
        target = ele.attr('data-toggle');
        $('#'+target).toggleClass('on');
    });
    
    $(window).on('scroll', function() {
//     if $('#header').scrollTop
        console.log($(document).scrollTop());
        if ($(document).scrollTop() >= 100) {
            $('#header').addClass('fixed');
        } else if ($('#header').hasClass('fixed') && $(document).scrollTop() < 100) {
            $('#header').removeClass('fixed');
        };
    })

});