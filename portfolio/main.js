$(document).ready(function () {

    $('#card-section .cstm-side').find('.card').eq(1).css({
        'background-color': '#ff000a',
        'color': '#fff'
    });
    $('#card-section .cstm-side').find('.card').eq(1).siblings().css({
        'background-color': '#273038',
        'color': '#fff'
    });

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) { // You can adjust the scroll position as needed
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    $("#dialog").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });

    $("#dialog-opener").on("click", function () {
        $("#dialog").dialog("open");
    });

});